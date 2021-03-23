(function (window) {
  "use strict";
  var FORM_SELECTOR = '[data-payment-form="form"]';
  var FormHandler = App.FormHandlerPayment;
  var formHandler = new FormHandler(FORM_SELECTOR);

  $(function () {
    $("#dialog-3").dialog({
      autoOpen: false,
      hide: "slide",
      show: "slide",
    });
  });

  formHandler.addSubmitHandler(function (data) {
    console.log(data);
  });
})(window);
