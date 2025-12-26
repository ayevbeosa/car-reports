import { DataSource, DataSourceOptions } from 'typeorm';

const dbConfigs: Record<string, Partial<DataSourceOptions>> = {
  development: {
    type: 'sqlite',
    database: 'db.sqlite',
    logging: true,
  },
  test: {
    type: 'sqlite',
    database: 'test.sqlite',
    logging: false,
  },
  production: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: ['error'],
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

const env = process.env.NODE_ENV || 'development';
const currentConfig = dbConfigs[env];

if (!currentConfig) {
  throw new Error(`No database configuration found for environment: ${env}`);
}

export const AppDataSource = new DataSource({
  ...currentConfig,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
} as DataSourceOptions);
