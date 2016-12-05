$(function () {
  "use strict";

  //modals
  var createModal = $('#createPhotolithModal');


  //buttons
  var createBtn = $('#createPhotolithBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var photolith = {
      price: $('#photolithPrice').val(),
      quantity: $('#photolithQuantity').val(),
      photolithSize: $('#photolithSize').val()
    };

    createPhotolith(photolith);
  }

  function createPhotolith(photolith) {
    $.post('/fotolito', photolith)
      .done(function (_photolith) {
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