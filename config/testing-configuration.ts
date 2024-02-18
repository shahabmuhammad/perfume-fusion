import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const testingConfig = {
    port: 4000, // Example port number for testing environment
    database: {
        host: 'localhost', // Example database host for testing environment
        port: 5432, // Example database port for testing environment
        username: 'user', // Example database username for testing environment
        password: 'password', // Example database password for testing environment
        database: 'mydatabase', // Example database name for testing environment
    },
    // Add any other configuration options specific to your testing environment
};

export const testingDatabaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'MShahab',
    password: 'shahab@12',
    database: 'prod_database',
    entities: [],
    synchronize: true,
};