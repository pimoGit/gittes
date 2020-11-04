// Creare 10 quadrati vuoti.
// Con jQuery, dentro ognuno scrivere un numero random

$(document).ready(function () {


  $('.square').each(function () {
    console.log($(this));
    $(this).text(randomNumGen(100));
  });


  //$('.square').text(randomNumGen(100));






});


//funzioni
function randomNumGen(max) {
  var numero = Math.floor(Math.random() * max) + 1;
  return numero;
}
