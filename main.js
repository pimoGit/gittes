 // Creare una piccola sezione FAQ.
 // Tante domande che quando cliccate visualizzano
 // la risposta corrispondente.



$(document).ready(function(){

    // rendo i p non visibili
    $('p').hide();

    //gestire l'evento click per nascondere
    //o visualizzare la risposta relativa alla domanda cliccata
    $('.faq h2').click(
      function(){
        // $('p').toggle();
        $(this).siblings('p').toggle();
        //$('.faq h2').siblings('p').toggle();
      }
    );

});
