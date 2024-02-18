import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { devDatabaseConfig, developmentConfig } from "./dev-configuration";
import { prodDatabaseConfig, productionConfig } from "./prod-configuration";
import { testingConfig, testingDatabaseConfig } from "./testing-configuration";


export default () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return productionConfig;
        case 'testing':
            return testingConfig;
        default:
            return developmentConfig;
    }
};

export const getTypeOrmConfig = (env: string): TypeOrmModuleOptions => {
    switch (env) {
        case 'production':
            return prodDatabaseConfig
        case 'testing':
            return testingDatabaseConfig
        default:
             return devDatabaseConfig;
    }
};
