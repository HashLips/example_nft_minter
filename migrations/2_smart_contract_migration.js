const SmartContract = artifacts.require("LunaLanders");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
