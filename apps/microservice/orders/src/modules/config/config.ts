import { registerAs } from '@nestjs/config';
import { get } from 'env-var';

export const appConfig = registerAs('app', () => ({
    port: get('PORT').default('3000').asPortNumber(),
    nodeEnv: get('NODE_ENV').default('development').asString()
}));

export const redisConfig = registerAs('redis', () => ({
    host: get('REDIS_HOST').default('localhost').asString(),
    port: get('REDIS_PORT').default('6379').asPortNumber(),
    password: get('REDIS_PASSWORD').asString(),
}));

export const kafkaConfig = registerAs('kafka', () => ({
    brokers: get('KAFKA_BROKERS').default('localhost:9092').asString().split(','),
}));

export const natsConfig = registerAs('nats', () => ({
    servers: get('NATS_SERVERS').default('nats://localhost:4222').asString().split(','),
}));

export const jwtConfig = registerAs('jwt', () => ({
    secret: get('JWT_SECRET').default('your-super-secret-jwt-key').asString(),
    expiresIn: get('JWT_EXPIRES_IN').default('24h').asString(),
}));
