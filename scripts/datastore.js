(function (window) {
  "use strict";
  // Code will go here
  var App = window.App || {};

  function DataStore() {
    this.data = {};
  }

  //Add a key and a value to the dataStore
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  //Retrieve the data based on the key
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };

  //Get all the data
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  //Remove a value based on its key
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
