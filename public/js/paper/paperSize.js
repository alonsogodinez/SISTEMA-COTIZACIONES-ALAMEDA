$(function () {
  "use strict";

  //modals
  var createModal = $('#createPaperSizeModal');


  //buttons
  var createBtn = $('#createPaperSizeBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var paperSize = {
      name: $('#paperSizeName').val()
    };
    createPaperSize(paperSize);
  }

  function createPaperSize(paperSize) {
    $.post('/papel/tamano', paperSize)
      .done(function (_paperSize) {
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