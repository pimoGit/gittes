 // Creare il titolo di un paragrafo
 // e un bottone che permette di espandere
 // il testo inizialmente nascosto

 $('p').hide();

var stateP = "hidden";

 $('button').click(
   function(){
     if(stateP === "hidden"){
       $('p').fadeIn(2000);
       stateP = "visible";
     } else {
       $('p').fadeOut(2000);
       stateP = "hidden";
     }
   }
 );
