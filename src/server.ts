import { inject, singleton } from 'tsyringe';
import { Logger } from 'winston';
import App from './app';
import { environmentVariables } from './config/environment-variables';
import { ContainerType } from './types';
import { dataSourcePromise } from './database/data-source';
import { InitializeLanguageTable } from './language/initialize';

@singleton()
export default class Server {
  constructor(
    private readonly app: App,
    @inject(ContainerType.LOGGER) private readonly logger: Logger,
    private readonly initializeLanguageTable: InitializeLanguageTable,
  ) {}

  public async start() {
    await dataSourcePromise;
    await this.initializeLanguageTable.initialize();
    const app = await this.app.start();
    app.listen(environmentVariables['API_PORT'], () => {
      this.logger.info(`Server up and running at port ${environmentVariables['API_PORT']}`);
    });
  }
}
