 // Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio.
$(document).ready(function () {


  //$('p').hide();

/*
  var aperto = false;

  $('button').click(function() {
   if(aperto === false){
     $('p').show();
     aperto = true;
   } else {
     $('p').hide();
     aperto = false;
   }
 });
*/

 $('button').click(function() {
    $('p').toggle();
    //$('button').toggleClass("classe");
 });



});
