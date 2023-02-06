import { container } from 'tsyringe';
import Koa from 'koa';
import { logger } from '../logger';
import Router from 'koa-router';
import { ContainerType, State } from '../types';
import type { Logger } from 'winston';
import { bearerStrategyOptions } from './bearer-strategy-options';
import {
  UserRepository,
  LanguageRepository,
  languageRepository,
  userRepository,
  ProjectRepository,
  projectRepository,
} from '../database/repository';
import { BearerStrategy } from 'passport-azure-ad';
import { DataSource } from 'typeorm';
import { dataSource } from '../database/data-source';

const koa = new Koa();
const router = new Router<State>();
container.register<BearerStrategy>(BearerStrategy, {
  useFactory: () =>
    new BearerStrategy(bearerStrategyOptions, (_request, token, done) => {
      done(undefined, {}, token);
    }),
});
container.registerInstance<Koa>(Koa, koa);
container.registerInstance<Router>(Router, router);
container.register<Logger>(ContainerType.LOGGER, { useValue: logger });
container.register<UserRepository>(ContainerType.USER_REPOSITORY, { useValue: userRepository });
container.register<LanguageRepository>(ContainerType.LANGUAGE_REPOSITORY, { useValue: languageRepository });
container.register<ProjectRepository>(ContainerType.PROJECT_REPOSITORY, { useValue: projectRepository });
container.registerInstance<DataSource>(DataSource, dataSource);

export { container as default } from 'tsyringe';
