import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const developmentConfig = {
    port: 8080, // Example port number for development environment
    database: {
        host: 'localhost', // Example database host for development environment
        port: 5432, // Example database port for development environment
        username: 'user', // Example database username for development environment
        password: 'password', // Example database password for development environment
        database: 'mydatabase', // Example database name for development environment
    },
    // Add any other configuration options specific to your development environment
};

export const devDatabaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'MShahab',
    password: 'shahab@12',
    database: 'perfume_fusion',
    entities: [],
    synchronize: true,
}
