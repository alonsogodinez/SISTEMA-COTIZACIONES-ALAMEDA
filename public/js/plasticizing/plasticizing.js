$(function () {
  "use strict";

  //modals
  var createModal = $('#createPlasticizingModal');


  //buttons
  var createBtn = $('#createPlasticizingBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var plasticizing = {
      price: $('#plasticizingPrice').val(),
      quantity: $('#plasticizingQuantity').val(),
      plasticizingSize: $('#plasticizingSize').val(),
      plasticizingClass: $('#plasticizingClass').val()
    };

    createPlasticizing(plasticizing);
  }

  function createPlasticizing(plasticizing) {
    $.post('/plastificado', plasticizing)
      .done(function (_plasticizing) {
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