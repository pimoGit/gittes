
$(document).ready(function(){

  var numRandom;

//gestione evento
$('.square').click( function () {

  var self = $(this);

    $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {
          // $("#risultati").html(data);
          // console.log(data.response, data.success);
          numRandom = data.response;
          if(numRandom <= 5){
            self.addClass("giallo");
          } else {
            self.addClass("verde");
          }
          self.text(numRandom);
        },
        error : function (richiesta,stato,errori) {
          console.log("E' avvenuto un errore. " + errori, "stato " + stato, richiesta);
        }
    });

    // non possibile perchè chiamata è asincrona
    console.log("la var definita è: ", numRandom);


  });

});
