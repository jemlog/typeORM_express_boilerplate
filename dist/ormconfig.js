"use strict";
const dotenv = require('dotenv');
dotenv.config();
module.exports = [
    {
        name: "default",
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: '4321',
        database: "typeorm_project_schema",
        synchronize: false,
        logging: true,
        entities: ['dist/src/entity/*.js'],
        migrations: ['src/migrations/**/*.ts'],
        subscribers: ['src/subscriber/**/*.ts'],
        cli: {
            entitiesDir: 'src/entity',
            migrationsDir: 'src/migrations',
            subscribersDir: 'src/subscriber',
        }
    },
    {
        name: "production",
        type: "mysql",
        host: "127.0.0.1",
        username: "root",
        password: process.env.DB_PASSWORD,
        database: "typeorm_project_schema",
        synchronize: false,
        logging: true,
        entities: ['dist/src/entity/*.js'],
        migrations: ['src/migrations/**/*.ts'],
        subscribers: ['src/subscriber/**/*.ts'],
        cli: {
            entitiesDir: 'src/entity',
            migrationsDir: 'src/migrations',
            subscribersDir: 'src/subscriber',
        }
    }
];
//# sourceMappingURL=ormconfig.js.map