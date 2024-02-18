import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const productionConfig = {
    port: 5000, // Example port number for production environment
    database: {
        host: 'localhost', // Example database host for production environment
        port: 5432, // Example database port for production environment
        username: 'user', // Example database username for production environment
        password: 'password', // Example database password for production environment
        database: 'mydatabase', // Example database name for production environment
    },
    // Add any other configuration options specific to your production environment
};

export const prodDatabaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'MShahab',
    password: 'shahab@12',
    database: 'prod_database',
    entities: [],
    synchronize: true,
};