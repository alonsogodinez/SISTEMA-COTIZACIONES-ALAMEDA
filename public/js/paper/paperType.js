$(function () {
  "use strict";

  //modals
  var createModal = $('#createPaperTypeModal');


  //buttons
  var createBtn = $('#createPaperTypeBtn');


  //events
  createBtn.click(createBtnHandler);


  //functions
  function createBtnHandler(e) {
    var paperType = {
      name: $('#paperTypeName').val()
    };
    createPaperType(paperType);
  }

  function createPaperType(paperType) {
    $.post('/papel/tipo', paperType)
      .done(function (_paperType) {
        toastr.success('OK');
        location= location;
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