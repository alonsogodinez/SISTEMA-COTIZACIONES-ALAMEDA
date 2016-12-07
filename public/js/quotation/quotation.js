$(function () {
  "use strict";

  //vars
  var printReference = 0;
  var subtotal = 0;

  //DOM
  var inputTypeSelect = $('#inputType');
  var quotationTable = $('#quotationTable');
  var quotationSubtotal = $('#quotationSubtotal');
  var quotationIGV = $('#quotationIGV');
  var quotationTotal = $('#quotationTotal');


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

    if (this.value == 'Papel') {
      addQuotationInputBtn.click(addPaper);
      $('#paperForm').removeClass('hidden');
    }
    else if (this.value == 'Placas') {
      addQuotationInputBtn.click(addPlate);
      $('#plateForm').removeClass('hidden');
    }
    else if (this.value == 'Impresion') {
      if (!printReference) {
        $(this).val('Placas').change();
        return toastr.error('Primero escoge cuantas placas usara');
      }
      addQuotationInputBtn.click(addPrint);
      $('#printForm').removeClass('hidden');
    }
    else if (this.value == 'Acabado') {
      addQuotationInputBtn.click(addFinish);
      $('#finishForm').removeClass('hidden');
    }
    else if (this.value == 'Fotolitos') {
      addQuotationInputBtn.click(addPhotolith);
      $('#photolithForm').removeClass('hidden');
    }
    else if (this.value == 'Troquelados') {
      addQuotationInputBtn.click(addPunching);
      $('#punchingForm').removeClass('hidden');
    }
    else if (this.value == 'Plastificado') {
      addQuotationInputBtn.click(addPlaticizing);
      $('#plasticizingForm').removeClass('hidden');
    }
    else if (this.value == 'Diseño') {
      addQuotationInputBtn.click(addDesign);
      $('#designForm').removeClass('hidden');
    }
  }

  function addPaper() {

    var paperTypeSelected = $('#paperType').find('option:selected');
    var paperSizeSelected = $('#paperSize').find('option:selected');

    var paperQuantity = $('#paperQuantity').val();
    var paperTypeId = paperTypeSelected.val();
    var paperSizeId = paperSizeSelected.val();

    var url = '/papel?PaperTypeId=' + paperTypeId + '&PaperSizeId=' +
      paperSizeId + '&quantity=' + paperQuantity;

    $.get(url)
      .done(function (response) {

        var paper = response.papers[0];

        if (!paper) return toastr.error('No está registrado el costo para este material');

        var paperType = paperTypeSelected.text();
        var paperSize = paperSizeSelected.text();
        var paperPrice = paper.price;

        var input = {
          name: paperQuantity + ' hojas de papel ' + paperType + ' ' + paperSize,
          price: paperPrice
        };

        addRow(input);
        updateTotal();
        quotationInputModal.modal('hide');
      })

      .fail(function (err) {
        toastr.error(err);
      });
  }

  function addPlate() {

    var plateSizeSelected = $('#plateSize').find('option:selected');
    var plateQuantity = $('#plateQuantity').val();
    var plateSizeId = plateSizeSelected.val();

    var url = '/placa?PlateSizeId=' + plateSizeId + '&quantity=' + plateQuantity;

    $.get(url)
      .done(function (response) {

        var plate = response.plates[0];

        if (!plate) return toastr.error('No está registrado el costo para este material');

        var plateSize = plateSizeSelected.text();
        var platePrice = plate.price;

        var input = {
          name: plateQuantity + (plateQuantity > 1 ? ' placas ' : ' placa ') +
          plateSize,
          price: platePrice
        };


        addRow(input);

        quotationInputModal.modal('hide');
        updateTotal();
        printReference = plateQuantity;

      })

      .fail(function (err) {
        toastr.error(err);
      });
  }

  function addPrint(e) {

    var printSizeSelected = $('#printSize').find('option:selected');
    var printQuantity = $('#printQuantity').val();
    var printSizeId = printSizeSelected.val();

    var url = '/impresion?PrintSizeId=' + printSizeId + '&quantity=' + printQuantity;

    $.get(url)
      .done(function (response) {

        var print = response.prints[0];

        if (!print) return toastr.error('No está registrado el costo para este material');

        var printSize = printSizeSelected.text();
        var printPrice = print.price;

        var input = {
          name: printQuantity + (printQuantity > 1 ? ' impresiones ' : ' impresion ') +
          printSize,
          price: printPrice * printReference
        };

        addRow(input);
        updateTotal();
        quotationInputModal.modal('hide');

      })

      .fail(function (err) {
        toastr.error(err);
      });
  }

  function addFinish() {

    var finishCost = $('#finishCost').val();
    var finishDescription = $('#finishDescription').val();

    var input = {
      name: finishDescription,
      price: finishCost
    };

    addRow(input);
    updateTotal();
    quotationInputModal.modal('hide');
  }

  function addPhotolith() {

    var photolithSizeSelected = $('#photolithSize').find('option:selected');
    var photolithQuantity = $('#photolithQuantity').val();
    var photolithSizeId = photolithSizeSelected.val();

    var url = '/fotolito?PhotolithSizeId=' + photolithSizeId + '&quantity=' + photolithQuantity;

    $.get(url)
      .done(function (response) {

        var photolith = response.photoliths[0];

        if (!photolith) return toastr.error('No está registrado el costo para este material');

        var photolithSize = photolithSizeSelected.text();
        var photolithPrice = photolith.price;

        var input = {
          name: photolithQuantity + (photolithQuantity > 1 ? ' fotolitos ' : ' fotolito ') +
          photolithSize,
          price: photolithPrice
        };

        addRow(input);
        updateTotal();
        quotationInputModal.modal('hide');

      })

      .fail(function (err) {
        toastr.error(err);
      });
  }

  function addPunching() {
    var punchingCost = $('#punchingCost').val();


    var input = {
      name: 'Troquelado',
      price: punchingCost
    };

    addRow(input);
    updateTotal();
    quotationInputModal.modal('hide');
  }

  function addPlaticizing() {
    var plasticizingClassSelected = $('#plasticizingClass').find('option:selected');
    var plasticizingSizeSelected = $('#plasticizingSize').find('option:selected');

    var plasticizingQuantity = $('#plasticizingQuantity').val();
    var plasticizingClassId = plasticizingClassSelected.val();
    var plasticizingSizeId = plasticizingSizeSelected.val();

    var url = '/plastificado?PlasticizingClassId=' + plasticizingClassId + '&PlasticizingSizeId=' +
      plasticizingSizeId + '&quantity=' + plasticizingQuantity;

    $.get(url)
      .done(function (response) {

        var plasticizing = response.plasticizings[0];

        if (!plasticizing) return toastr.error('No está registrado el costo para este material');

        var plasticizingClass = plasticizingClassSelected.text();
        var plasticizingSize = plasticizingSizeSelected.text();
        var plasticizingPrice = plasticizing.price;

        var input = {
          name: plasticizingQuantity + ' plastificados ' + plasticizingClass + ' ' + plasticizingSize,
          price: plasticizingPrice
        };

        addRow(input);
        updateTotal();
        quotationInputModal.modal('hide');
      })

      .fail(function (err) {
        toastr.error(err);
      });
  }

  function addDesign() {
    var designCost = $('#designCost').val();


    var input = {
      name: 'Diseño',
      price: designCost
    };

    addRow(input);
    updateTotal();
    quotationInputModal.modal('hide');

  }

  function addRow(input) {

    var name = $('<td></td>').text(input.name);
    var price = $('<td></td>').text('S/.' + input.price);
    var row = $('<tr></tr>').append(name, price);

    quotationTable.find('tbody').prepend(row);
  }

  function updateTotal() {

    var rows = quotationTable.find('tbody tr').toArray();

    rows.pop();
    rows.pop();
    rows.pop();

    var total = rows.map(function (row) {
      return Number(row.cells[1].innerHTML.substring(3))
    })

      .reduce(function (a, b) {
        return a + b;
      });

    quotationSubtotal.text('S/.' + total);
    quotationIGV.text('S/.' + (total * 0.18));
    quotationTotal.text('S/.' + (total * 1.18));


  }


  //Flow
  quotationInputModal.modal('show');

});