const SmartContract = artifacts.require("NerdyCoderClones");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
