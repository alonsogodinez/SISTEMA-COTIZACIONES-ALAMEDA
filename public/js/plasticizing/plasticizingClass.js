$(function () {
  "use strict";

  //modals
  var createModal = $('#createPlasticizingClassModal');


  //buttons
  var createBtn = $('#createPlasticizingClassBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var plasticizingClass = {
      name: $('#plasticizingClassName').val()
    };
    createPlasticizingClass(plasticizingClass);
  }

  function createPlasticizingClass(plasticizingClass) {
    $.post('/plastificado/clase', plasticizingClass)
      .done(function (_plasticizingClass) {
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