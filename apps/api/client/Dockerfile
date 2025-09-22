# Dockerfile для api-client
FROM node:18-alpine AS base

WORKDIR /app

# Копируем только package files
COPY package*.json ./
COPY apps/common/package*.json ./apps/common/ 2>/dev/null || true
COPY apps/api-client/package*.json ./apps/api-client/ 2>/dev/null || true

# Устанавливаем зависимости
RUN npm ci && npm cache clean --force

# Development stage
FROM base AS development

# Устанавливаем ts-node глобально
RUN npm install -g ts-node

# Открываем порт
EXPOSE 3001

# Команда для запуска (код будет монтироваться через volume)
CMD ["npm", "run", "start:dev:service", "api-client"]

# Builder stage
FROM base AS builder

# Копируем только нужные части для сборки
COPY apps/common ./apps/common
COPY apps/api-client ./apps/api-client
COPY nest-cli.json ./
COPY tsconfig*.json ./

# Собираем сервис
RUN npm run build:api-client

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Создаем пользователя
RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001

# Копируем package files
COPY package*.json ./

# Устанавливаем только production зависимости
RUN npm ci --only=production && npm cache clean --force

# Копируем собранное приложение
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/common ./apps/common

# Переключаемся на пользователя
USER nestjs

# Открываем порт
EXPOSE 3001

# Команда по умолчанию
CMD ["node", "dist/apps/api-client/main.js"]
