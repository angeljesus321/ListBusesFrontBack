const { overrideDevServer } = require('customize-cra');

const devServerConfig = () => (config) => {
  config.allowedHosts = 'all'; // Permitir todos los hosts
    return config;
};

module.exports = {
    devServer: overrideDevServer(devServerConfig()),
};