import Router from 'koa-router';
import { singleton } from 'tsyringe';
import type { State } from '../types';
import { BearerStrategy } from 'passport-azure-ad';
import passport from 'koa-passport';
import { CreateUserIfNotExist, authenticateBearerToken, catchValidationErrors } from '../middleware';
import bodyParser from 'koa-bodyparser';
import UsersRouter from './users';
import ProjectsRouter from './projects';

@singleton()
export default class Routes {
  constructor(
    private readonly router: Router<State>,
    private readonly bearerStrategy: BearerStrategy,
    private readonly createUserIfNotExist: CreateUserIfNotExist,
    private readonly usersRouter: UsersRouter,
    private readonly projectsRouter: ProjectsRouter,
  ) {}

  public async start(): Promise<Router> {
    this.router.use(bodyParser());
    this.router.use(passport.initialize());
    passport.use(this.bearerStrategy);
    this.router.use('/api/v1', authenticateBearerToken, catchValidationErrors);

    this.router.get('/api/v1', this.createUserIfNotExist.check());
    this.usersRouter.initialize();
    this.projectsRouter.initialize();

    return this.router;
  }
}
