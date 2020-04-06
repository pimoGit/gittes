 // Simulare un countdown di 10 secondi che alla fine dice buon anno

$(document).ready(function(){


var tempo = 10;

var interval = setInterval(buonAnno, 200);
var elemento = $('h1');

function buonAnno() {

  if (tempo === 0){
    elemento.html("Buon Anno!");
    clearInterval(interval);
  } else {
    elemento.html(tempo);
    tempo--;
  }



}



});
