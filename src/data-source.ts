import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'Workspace',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
