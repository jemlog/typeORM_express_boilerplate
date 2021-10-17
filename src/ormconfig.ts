import { ConnectionOptions } from "typeorm";
import dotenv from 'dotenv'

dotenv.config()
const config: ConnectionOptions = {
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "postgres",
   password: process.env.DB_PASSWORD,
   database: "typeorm_project_schema",
   synchronize: true,
   logging : true,
   entities: ['dist/**/*.js'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber',
  },
}

export default config
