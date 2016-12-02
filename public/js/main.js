$(function(){
    "use strict";

    var  quotationModal = $('#quotationInputModal');

    quotationModal.modal('show');

    $('#inputType').change(function(){

        var inputForm = $('.inputForm');
        inputForm.addClass('hidden');

        if(this.value == 'Papel'){
            $('#paperForm').removeClass('hidden');
        }
        else if(this.value == 'Placas'){
            $('#plateForm').removeClass('hidden');
        }
        else if(this.value == 'Impresion'){
            $('#printForm').removeClass('hidden');
        }
        else if(this.value == 'Acabado'){
            $('#finishForm').removeClass('hidden');
        }
        else if(this.value == 'Fotolitos'){
            $('#photolithForm').removeClass('hidden');
        }
        else if(this.value == 'Troquelados'){
            $('#punchingForm').removeClass('hidden');
        }
        else if(this.value == 'Plastificado'){
            $('#plasticizingForm').removeClass('hidden');
        }
        else if(this.value == 'Diseño'){
            $('#designForm').removeClass('hidden');
        }
    })

});