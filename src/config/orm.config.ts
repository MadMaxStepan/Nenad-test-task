import { ConnectionOptions } from 'typeorm';

import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} from './index';

export const ORM_CONFIG = {
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [`${__dirname}/../**/*.entity.*`],
  synchronize: true,
  logging: true,
} as ConnectionOptions;
