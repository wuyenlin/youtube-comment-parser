import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../config/data-source-options';

export const dataSource = new DataSource(dataSourceOptions);
export const dataSourcePromise = dataSource.initialize();
