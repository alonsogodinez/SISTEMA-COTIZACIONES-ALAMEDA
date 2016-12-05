$(function () {
  "use strict";

  //modals
  var createModal = $('#createPhotolithSizeModal');


  //buttons
  var createBtn = $('#createPhotolithSizeBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var photolithSize = {
      name: $('#photolithSizeName').val()
    };
    createPhotolithSize(photolithSize);
  }

  function createPhotolithSize(photolithSize) {
    $.post('/fotolito/tamano', photolithSize)
      .done(function (_photolithSize) {
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