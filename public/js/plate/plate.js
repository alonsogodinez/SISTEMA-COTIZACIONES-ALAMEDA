$(function () {
  "use strict";

  //modals
  var createModal = $('#createPlateModal');


  //buttons
  var createBtn = $('#createPlateBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var plate = {
      price: $('#platePrice').val(),
      quantity: $('#plateQuantity').val(),
      plateSize: $('#plateSize').val()
    };

    createPlate(plate);
  }

  function createPlate(plate) {
    $.post('/placa', plate)
      .done(function (_plate) {
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