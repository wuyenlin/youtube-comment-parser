import type { DataSourceOptions } from 'typeorm';
import { environmentVariables } from './environment-variables';
import { Language, Project, User } from '../entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: environmentVariables['DB_HOST'],
  port: environmentVariables['DB_PORT'],
  username: environmentVariables['DB_USERNAME'],
  password: environmentVariables['DB_PASSWORD'],
  database: environmentVariables['DB_NAME'],
  entities: [User, Language, Project],
  synchronize: true,
  logging: true,
};
