$(function () {
  "use strict";


  //DOM
  var inputTypeSelect= $('#inputType');

  var quotationTable = $('#quotationTable');


  //modals
  var quotationInputModal = $('#quotationInputModal');

  //forms
  var inputForm = $('.inputForm');


  //buttons
  var addQuotationInputBtn = $('#addQuotationInputBtn');


  //events
  addQuotationInputBtn.click(addPaper); //init value
  inputTypeSelect.change(changeInputContext);


  //functions
  function changeInputContext() {

    inputForm.addClass('hidden');
    addQuotationInputBtn.unbind('click');

    if(this.value == 'Papel'){
      addQuotationInputBtn.click(addPaper);
      $('#paperForm').removeClass('hidden');
    }
    else if(this.value == 'Placas'){
      addQuotationInputBtn.click(addPlate);
      $('#plateForm').removeClass('hidden');
    }
    else if(this.value == 'Impresion'){
      addQuotationInputBtn.click(addPrint);
      $('#printForm').removeClass('hidden');
    }
    else if(this.value == 'Acabado'){
      addQuotationInputBtn.click(addFinish);
      $('#finishForm').removeClass('hidden');
    }
    else if(this.value == 'Fotolitos'){
      addQuotationInputBtn.click(addPhotolith);
      $('#photolithForm').removeClass('hidden');
    }
    else if(this.value == 'Troquelados'){
      addQuotationInputBtn.click(addPunching);
      $('#punchingForm').removeClass('hidden');
    }
    else if(this.value == 'Plastificado'){
      addQuotationInputBtn.click(addPlaticizing);
      $('#plasticizingForm').removeClass('hidden');
    }
    else if(this.value == 'Diseño'){
      addQuotationInputBtn.click(addDesign);
      $('#designForm').removeClass('hidden');
    }
  }


  function addPaper(e){
    var paperType = $('#paperType').find('option:selected').text();
    var paperSize = $('#paperSize').find('option:selected').text();
    var paperTypeId = $('#paperType').find('option:selected').val();
    var paperSizeId = $('#paperSize').find('option:selected').val();

    var paperQuantity = $('#paperQuantity').val();
    var paperPrice;

    $.get('/papel?PaperTypeId='+ paperTypeId + '&PaperSizeId='+ paperSizeId + '&quantity='+ paperQuantity)
      .done(function(paper){
        console.log(paper);
        paperPrice = paper.price;
      })
      .fail(function(err){
        toastr.error(err);
      });


    // var input = {
    //   name : 'Papel' + paperType + ' '+ paperSize + ' ' + paperQuantity,
    //   price: paperPrice
    // }
    //addRow();
  }

  function addPlate(e){

  }

  function addPrint(e){

  }
  function addFinish(e){

  }

  function addPhotolith(e){

  }

  function addPunching(e){

  }

  function addPlaticizing(e){

  }

  function addDesign(e){

  }

  function addRow(input){

    var name = $('<td></td>').text(input.name);
    var price = $('<td></td>').text(input.price);
    var row = $('<tr></tr>').append(name, price);

    quotationTable.find('tbody').prepend(row);

  }




  //Flow
  quotationInputModal.modal('show');

});