$(function () {
  "use strict";

  //modals
  var createModal = $('#createPrintSizeModal');


  //buttons
  var createBtn = $('#createPrintSizeBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var printSize = {
      name: $('#printSizeName').val()
    };
    createPrintSize(printSize);
  }

  function createPrintSize(printSize) {
    $.post('/impresion/tamano', printSize)
      .done(function (_printSize) {
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