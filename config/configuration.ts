import developmentConfig from "./dev-configuration";
import productionConfig from "./prod-configuration";
import testingConfig from "./testing-configuration";


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
