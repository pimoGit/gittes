 // Creare 10 quadrati vuoti con jQuery,
 //poi associare una classe red ai quadrati in posizione pari e una classe green ai quadrati in posizione dispari.

$(document).ready(function () {


  for (var i = 0; i < 10; i++) {
    var square = '<div class="square"></div>';
    $('.squares').append(square);
  }



  $('.square').each(function (indice, elemento) {
    //console.log($(this).index());
    console.log(indice, elemento);
    if (indice % 2 === 0){ //indice pari
      $(elemento).addClass("red");
    } else {
      $(elemento).addClass("green");
    }
  });


  //$('.square').text(randomNumGen(100));






});
