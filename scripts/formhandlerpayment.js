(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandlerPayment(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandlerPayment.prototype.addSubmitHandler = function (fn) {
    console.log("Setting the submit handler for form");
    this.$formElement.on("submit", function (event) {
      event.preventDefault();

      var data = {};
      $(this)
        .serializeArray()
        .forEach(function (item) {
          data[item.name] = item.value;
          console.log(item.name + " is " + item.value);
        });

      console.log(data);
      fn(data);
      $("#jTitleName").replaceWith(
        "<p id=jTitleName>" + data.title + " " + data.username + ".</p>"
      );
      $("#dialog-3").dialog("open");
      this.reset();
      this.elements[0].focus();
    });
  };

  App.FormHandlerPayment = FormHandlerPayment;
  window.App = App;
})(window);
