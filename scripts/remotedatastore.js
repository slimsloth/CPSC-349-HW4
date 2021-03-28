(function (window) {
  "use strict";
  var App = window.App || {};
  //   var $ = window.jQuery;
  //   function RemoteDataStore(url) {
  //     if (!url) {
  //       throw new Error("No remote URL supplied.");
  //     }
  //     this.serverUrl = url;
  //   }
  //   RemoteDataStore.prototype.add = function (key, val) {
  //       $.post(this.serverUrl, val, function (serverResponse) {
  //           console.log(serverResponse);
  //       });
  //   };

  //   RemoteDataStore.prototype.getAll = function (cb) {
  //     $.get(this.serverUrl, function (serverResponse) {
  //         console.log(serverResponse);
  //         cb(serverResponse);
  //     });
  // };
  // RemoteDataStore.prototype.get = function (key, cb) {
  //     $.get(this.serverUrl + '/' + key, function(serverResponse) {
  //         console.log(serverResponse);
  //         cb(serverResponse);
  //     });
  // };
  // RemoteDataStore.prototype.remove = function(key) {
  //     //delete this.data[key]
  //     $.ajax(this.serverUrl + '/' + key, {type: 'DELETE'});
  // };
  // RemoteDataStore.prototype.removeAll = function() {
  //     $.ajax(this.serverUrl, {type: 'DELETE'});
  // };
  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }
  RemoteDataStore.prototype.add = function (val) {
    db.collection("orders").add({
      coffeeOrder: val.coffee,
      emailAddress: val.emailAddress,
      flavor: val.flavor,
      size: val.size,
      strength: val.strength,
    });
  };

  RemoteDataStore.prototype.get = function (key) {
    var queries = [];
    db.collection("orders")
      .where("email", "==", key)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          queries.push(doc.data());
        });
      });
  };

  RemoteDataStore.prototype.getAll = function () {
    var orders = [];
    db.collection("orders")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          orders.push(doc.data());
          console.log(doc.data());
        });
      });
    return orders;
  };

  RemoteDataStore.prototype.remove = function (key) {
    var orders_query = db.collection("orders").where("emailAddress", "==", key);
    orders_query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
