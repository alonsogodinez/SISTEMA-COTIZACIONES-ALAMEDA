$(function () {
  "use strict";

  //modals
  var createModal = $('#createPlateSizeModal');


  //buttons
  var createBtn = $('#createPlateSizeBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var plateSize = {
      name: $('#plateSizeName').val()
    };
    createPlateSize(plateSize);
  }

  function createPlateSize(plateSize) {
    $.post('/placa/tamano', plateSize)
      .done(function (_plateSize) {
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