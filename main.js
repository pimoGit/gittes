// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()

$(document).ready(function(){

  var tempo = parseInt(prompt("inserisci i secondi mancanti"));


  setTimeout(pasta, tempo * 1000);




  function pasta() {
    // alert("la pasta è pronta!");
    $('h1').html("la pasta è pronta!");
  }


});
