require('dotenv').config({ path: './docker/environments' });

let {
 DB_HOST,
 DB_PORT = 3306,
 DB_USER = 'root',
 DB_PASSWORD = 'root',
 DB_NAME = 'video_titles',
 NODE_ENV
} = process.env;

module.exports = [
 {
   "type": "mysql",
   "host": DB_HOST,
   "port": DB_PORT,
   "username": DB_USER,
   "password": DB_PASSWORD,
   "database": DB_NAME,
   "autoSchemaSync": true,
   "entities": [`./**/*.entity{.ts,.js}`],
   "migrations": [
     "src/migration/*.ts"
   ],
   "cli": {
     "migrationsDir": "src/migration",
   }
 }
];