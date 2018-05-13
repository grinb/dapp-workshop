// var mnemonic = require('./mnemonic.js')
// var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // rinkebyinfura: {
    //   provider: function() {
    //     var p = new HDWalletProvider(mnemonic.get(), "https://rinkeby.infura.io/bMxc4czJmSyw5YNaYIuR");
    //     // console.log(p);
    //     return p;
    //   },
    //   network_id: 4,
    //
    // },
    // liveinfura: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic.get(), "https://mainnet.infura.io/bMxc4czJmSyw5YNaYIuR")
    //   },
    //   network_id: 1,
    //
    // },
  }
};
