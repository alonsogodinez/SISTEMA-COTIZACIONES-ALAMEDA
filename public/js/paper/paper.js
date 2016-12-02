$(function () {
  "use strict";

  //modals
  var createModal = $('#createPaperModal');


  //buttons
  var createBtn = $('#createPaperBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var paper = {
      price: $('#paperPrice').val(),
      quantity: $('#paperQuantity').val(),
      paperType: $('#paperType').val(),
      paperSize: $('#paperSize').val()
    };

    createPaper(paper);
  }

  function createPaper(paper) {
    $.post('/papel', paper)
      .done(function (_paper) {
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