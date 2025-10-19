'use strict';

const { apply, url, applyTemplates, move, mergeWith, chain, template } = require('@angular-devkit/schematics');
const core = require('@angular-devkit/core');
const inquirer = require('inquirer').default;
const strings = core.strings;

function usecase(options) {
  return async function (tree, context) {
    options = options || {};
    const name = options.name || '';

    const rules = [];

    const config = JSON.parse(tree.read('/nest-cli.json').toString('utf-8'));
    const apies = [];
    const microses = [];

    Object.keys(config.projects).forEach(name => {
      if (config.projects[name].root.indexOf('apps/microservice/') !== -1) {
        microses.push(name)
      }

      if (config.projects[name].root.indexOf('apps/api/') !== -1) {
        apies.push(name);
      }
    });

    const { entity } = await inquirer.prompt([
      {
        type: 'list',
        name: 'entity',
        message: 'Choose a micro:',
        choices: microses
      }]);

    // Microservice usecase
    const micro = apply(url('./files/micro'), [
      template(Object.assign({}, strings, { name, entity })),
      move(`apps/microservice/${strings.dasherize(entity)}/src/usecases/${strings.dasherize(name)}`),
    ]);
    rules.push(mergeWith(micro));

    // Optional DTO/Response
    if (options.common) {
      const common = apply(url('./files/common'), [
        template(Object.assign({}, strings, { name, entity })),
        move(`apps/common/src/transport/${strings.dasherize(entity)}/dtos/${strings.dasherize(name)}`),
      ]);
      rules.push(mergeWith(common));
    }

    // Optional API controller
    if (options.controller) {
      const { api } = await inquirer.prompt([
        {
          type: 'list',
          name: 'api',
          message: 'Choose a api:',
          choices: apies
        }]);

      const { section } = await inquirer.prompt([
        {
          type: 'string',
          name: 'section',
          message: 'Name of section'
        }]);

      const service = apply(url('./files/api'), [
        template(Object.assign({}, strings, { name, entity, api, section })),
        move(`apps/api/${strings.dasherize(api)}/src/sections/${strings.dasherize(section)}`),
      ]);
      rules.push(mergeWith(service));
    }

    context.logger.info(`✔️ Usecase '${name}' for entity '${entity}' generated${options.controller ? ' with controller' : ''}.`);

    return chain(rules);
  };
}

module.exports = { usecase };