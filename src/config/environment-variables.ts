import { Environment } from '../types/environment';
import 'dotenv/config';
import { EnvironmentBuilder } from '@hexlabs/env-vars-ts';

export const environmentVariables = EnvironmentBuilder.create(
  'NODE_ENV',
  'API_PORT',
  'MAX_LOG_LEVEL',
  'AUTHORITY',
  'CLIENT_ID',
  'DB_PORT',
  'DB_HOST',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_NAME',
)
  .transform((apiPort) => {
    if (!apiPort) {
      throw new Error('API_PORT is missing.');
    }
    return Number.parseInt(apiPort);
  }, 'API_PORT')
  .transform((environment) => {
    if (!environment || !Object.keys(Environment).includes(environment)) {
      throw new Error('NODE_ENV is missing or invalid NODE_ENV.');
    }
    return environment;
  }, 'NODE_ENV')
  .transform((authority) => {
    if (!authority) {
      throw new Error('AUTHORITY is missing');
    }
    return authority;
  }, 'AUTHORITY')
  .transform((clientId) => {
    if (!clientId) {
      throw new Error('CLIENT_ID is missing');
    }
    return clientId;
  }, 'CLIENT_ID')
  .transform((databasePort) => {
    if (!databasePort) {
      throw new Error('DB_PORT is missing');
    }
    return Number.parseInt(databasePort);
  }, 'DB_PORT')
  .transform((databaseHost) => {
    if (!databaseHost) {
      throw new Error('DB_HOST is missing');
    }
    return databaseHost;
  }, 'DB_HOST')
  .transform((databaseUsername) => {
    if (!databaseUsername) {
      throw new Error('DB_USERNAME is missing');
    }
    return databaseUsername;
  }, 'DB_USERNAME')
  .transform((databasePassword) => {
    if (!databasePassword) {
      throw new Error('DB_PASSWORD is missing');
    }
    return databasePassword;
  }, 'DB_PASSWORD')
  .transform((databaseName) => {
    if (!databaseName) {
      throw new Error('DB_NAME is missing');
    }
    return databaseName;
  }, 'DB_NAME')
  .defaults({ MAX_LOG_LEVEL: 'info' })
  .environment();
