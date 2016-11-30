$(function(){
    "use strict";

    var  quotationModal = $('#quotationInputModal');

    quotationModal.modal('show');

    $('#inputType').change(function(){
        var inputForm = $('.inputForm');
        inputForm.addClass('hidden');

        if(this.value == 'papel'){
            $('#paperForm').removeClass('hidden');
        }
        else if(this.value == 'placas'){
            $('#plateForm').removeClass('hidden');
        }
        else if(this.value == 'impresion'){
            $('#printForm').removeClass('hidden');
        }
        else if(this.value == 'acabado'){
            $('#finishForm').removeClass('hidden');
        }
        else if(this.value == 'fotolitos'){
            $('#photolithForm').removeClass('hidden');
        }
        else if(this.value == 'troquelados'){
            $('#punchingForm').removeClass('hidden');
        }
        else if(this.value == 'plastificado'){
            $('#plasticizingForm').removeClass('hidden');
        }
    })

});