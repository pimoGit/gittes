// Genero 10 numeri random utilizzando una funzione




 for (var i = 0; i < 10; i++) {
   var numero = genramiUnNumeroRandom(10);
   console.log(numero);
 }



 // gruppo utilities functions

 function genramiUnNumeroRandom(massimoValore) {
   if (massimoValore) {
     return Math.floor(Math.random() * massimoValore) +1;
   } else {
     return "non hai inserito il valore dell'argomento";
   }
 }
