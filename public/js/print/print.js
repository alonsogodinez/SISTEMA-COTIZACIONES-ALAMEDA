$(function () {
  "use strict";

  //modals
  var createModal = $('#createPrintModal');


  //buttons
  var createBtn = $('#createPrintBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var print = {
      price: $('#printPrice').val(),
      quantity: $('#printQuantity').val(),
      printSize: $('#printSize').val()
    };

    createPrint(print);
  }

  function createPrint(print) {
    $.post('/impresion', print)
      .done(function (_print) {
        toastr.success('OK');
        createModal.modal('hide');
        location.reload();
        //TODO update html table/list
      })
      .fail(function(err){
        toastr.error('err', err);
      })
      .always(function(){
        //
      })

  }

});