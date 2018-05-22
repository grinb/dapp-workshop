App = {
  web3Provider: null,
  contracts: {},

  init: function() {

    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('/contracts/Titles.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var TitlesArtifact = data;
      App.contracts.Titles = TruffleContract(TitlesArtifact);

      // Set the provider for our contract
      App.contracts.Titles.setProvider(App.web3Provider);

    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-add-title', App.addTitle);
    $(document).on('click', '.btn-get-titles-count', App.getTitlesCount);
  },


  addTitle: function() {

    var titlesInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Titles.deployed().then(function(instance) {
        titlesInstance = instance;

        // Execute adopt as a transaction by sending account
        return titlesInstance.addTitle($('#add-title-input').val(), {from: account});
      }).then(function(result) {
        return true;
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  getTitlesCount: function() {

    var titlesInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Titles.deployed().then(function(instance) {
        titlesInstance = instance;

        // Execute adopt as a transaction by sending account
        return titlesInstance.getTitlesCount();
      }).then(function(result) {
        $('#titles-count').val(result);
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },


};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
