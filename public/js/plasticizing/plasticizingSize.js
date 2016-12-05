$(function () {
  "use strict";

  //modals
  var createModal = $('#createPlasticizingSizeModal');


  //buttons
  var createBtn = $('#createPlasticizingSizeBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var plasticizingSize = {
      name: $('#plasticizingSizeName').val()
    };
    createPlasticizingSize(plasticizingSize);
  }

  function createPlasticizingSize(plasticizingSize) {
    $.post('/plastificado/tamano', plasticizingSize)
      .done(function (_plasticizingSize) {
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