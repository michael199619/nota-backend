'use strict';

const { apply, url, move, applyTemplates, mergeWith, chain } = require('@angular-devkit/schematics');
const { strings } = require('@angular-devkit/core');
const inquirer = require('inquirer').default;
const { Project } = require('ts-morph');
const { join } = require('path');

function addFeature(options) {
  return async (tree, context) => {
    options = options || {};
    const config = JSON.parse(tree.read('/nest-cli.json').toString('utf8'));
    const apies = [];
    const microses = [];

    Object.keys(config.projects).forEach(name => {
      const root = config.projects[name].root;
      if (root.includes('apps/microservice/')) microses.push(name);
      if (root.includes('apps/api/')) apies.push(name);
    });

    const { entity } = await inquirer.prompt([
      { type: 'list', name: 'entity', message: 'Choose microservice:', choices: microses },
    ]);

    if (!options.name) {
      const answer = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'Name of feature:' },
      ]);
      options.name = answer.name;
    }

    const rules = [];

    // --- Microservice Usecase ---
    const micro = apply(url('./files/micro'), [
      applyTemplates({ ...strings, ...options, entity }),
      move(`apps/microservice/${strings.dasherize(entity)}/src/usecases/${strings.dasherize(options.name)}`),
    ]);
    rules.push(mergeWith(micro));

    // --- Common DTO/Response ---
    if (options.common) {
      const common = apply(url('./files/common'), [
        applyTemplates({ ...strings, ...options, entity }),
        move(`apps/common/src/transport/${strings.dasherize(entity)}/dtos/${strings.dasherize(options.name)}`),
      ]);
      rules.push(mergeWith(common));

      // --- ts-morph: обновление index.ts для DTO ---
      rules.push((tree, context) => {
        const indexPath = join(
          process.cwd(),
          `apps/common/src/transport/${strings.dasherize(entity)}/dtos/index.ts`
        );
        const project = new Project({ useInMemoryFileSystem: false });
        if (!tree.exists(indexPath)) tree.create(indexPath, '');
        const sourceFile = project.createSourceFile(indexPath, tree.read(indexPath).toString() || '', { overwrite: true });

        const exportLine = `export * from './${strings.dasherize(options.name)}';`;
        const hasExport = sourceFile.getText().includes(exportLine);
        if (!hasExport) {
          sourceFile.insertText(sourceFile.getFullWidth(), `\n${exportLine}\n`);
          sourceFile.saveSync();
          tree.overwrite(indexPath, sourceFile.getFullText());
        }
        return tree;
      });
    }

    // --- API Controller ---
    if (options.controller) {
      const { api } = await inquirer.prompt([
        { type: 'list', name: 'api', message: 'Choose API:', choices: apies },
      ]);
      const { section } = await inquirer.prompt([
        { type: 'input', name: 'section', message: 'Name of section:' },
      ]);

      const apiPart = apply(url('./files/api'), [
        applyTemplates({ ...strings, ...options, entity, api, section }),
        move(`apps/api/${strings.dasherize(api)}/src/sections/${strings.dasherize(section)}`),
      ]);
      rules.push(mergeWith(apiPart));

      // --- ts-morph: обновление app.module.ts ---
      rules.push((tree, context) => {
        context.logger.info('🧠 Updating app.module.ts via ts-morph...');
        const modulePath = join(
          process.cwd(),
          `apps/api/${strings.dasherize(api)}/src/app.module.ts`
        );
        if (!tree.exists(modulePath)) return tree;

        const project = new Project({ useInMemoryFileSystem: false });
        const sourceFile = project.createSourceFile(modulePath, tree.read(modulePath).toString(), { overwrite: true });

        const className = `${strings.classify(section)}Controller`;
        const importPath = `./sections/${strings.dasherize(section)}/${strings.dasherize(section)}.controller`;

        const hasImport = sourceFile.getImportDeclarations().some(imp => imp.getModuleSpecifierValue() === importPath);
        if (!hasImport) {
          sourceFile.addImportDeclaration({
            namedImports: [className],
            moduleSpecifier: importPath,
          });
        }

        const moduleClass = sourceFile.getClass(() => true);
        const moduleDecorator = moduleClass?.getDecorator('Module');
        if (moduleDecorator) {
          const objLiteral = moduleDecorator.getArguments()[0];
          const controllersProp = objLiteral.getProperty('controllers');
          if (controllersProp) {
            const initializer = controllersProp.getInitializer();
            if (!initializer.getText().includes(className)) {
              initializer.replaceWithText(initializer.getText().replace(']', `, ${className}]`));
            }
          }
        }

        sourceFile.saveSync();
        tree.overwrite(modulePath, sourceFile.getFullText());
        context.logger.info(`✅ Controller ${className} registered in app.module.ts`);
        return tree;
      });
    }

    context.logger.info(`✔️ Feature '${options.name}' for '${entity}' generated${options.controller ? ' with controller' : ''}.`);

    return chain(rules);
  };
}

module.exports = { addFeature };