const FlashloanMoneyLego = artifacts.require("FlashloanMoneyLego");
module.exports = function(deployer) {
  deployer.deploy(FlashloanMoneyLego);
};