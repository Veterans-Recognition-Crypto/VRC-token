const Veteran = artifacts.require("Veteran");

// const { config } = require('./migration-config');

module.exports = function (deployer) {
  
  deployer.deploy(Veteran);
};
