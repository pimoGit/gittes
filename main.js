 // creare uno slider
$(document).ready(function(){


// gestione evento sul prev
  $('.prev').click(
    //funzione di CB
      prevImg
  );

// gestione evento sul next
  $('.next').click(
    //funzione di CB
      nextImg
  );


  // funzione next
function nextImg() {

    // salvo ref a img attiva al momento del click
    var imgActive = $('.images img.active');
    // console.log(imgActive);

    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img selezionata
    imgActive.removeClass('active');

    // tolgo la classe active al pallino selezionato
    ballActive.removeClass('active');



    // verifico se questa img era l'ultima
    if(imgActive.hasClass('last')){
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      // applica classe active alla prox img
      imgActive.next().addClass('active');
      ballActive.next().addClass('active');
      // console.log(imgActive.next());
  }
}

// funzione prevImg
 function prevImg() {

   // salvo ref a img attiva al momento del click
   var imgActive = $('.images img.active');
   // tolgo la classe active all'img selezionata
   imgActive.removeClass('active');

   // verifico se questa img era la prima
   if(imgActive.hasClass('first')){
     $('.images img.last').addClass('active');
   } else {
     // applica classe active alla prox img
     imgActive.prev().addClass('active');
     // console.log(imgActive.next());
   }

 }




});
