import { DataSource } from 'typeorm';

const dbConfigs: Record<string, string> = {
  development: 'db.sqlite',
  test: 'test.sqlite',
  production: '',
};

const env = process.env.NODE_ENV || 'development';
const database = dbConfigs[env];

if (!database) {
  throw new Error(`No database configuration found for environment: ${env}`);
}

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: database,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
});
