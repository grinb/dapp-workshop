var Titles = artifacts.require("Titles");

module.exports = function(deployer, netowrk, accounts) {
  deployer.deploy(Titles, accounts[0]);
};
