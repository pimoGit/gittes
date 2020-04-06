 // Simulare un countdown di 10 secondi che alla fine dice buon anno

$(document).ready(function(){

 var contenitore = $('ul');

 var bottone = $('button');

 bottone.click(

   function () {
     var input = $('input').val();
     // console.log(input);
     contenitore.append("<li>" + input + "</li>");
     $('input').val("");
   }

 );


});
