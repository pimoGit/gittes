// Creare un bottone che on hover aggiunga una classe
// che cambia il colore del testo
// e la toglie quando il mouse esce dal bottone.
// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente


var bottone =  $('.bottone');

bottone.on({
  mouseenter: function(){
      bottone.addClass('classToAdd');
  },
  mouseleave: function(){
      bottone.removeClass('classToAdd');
  },
  dblclick: function(){
      bottone.text('cliccato');
  }
});

// bottone.mouseenter(
//     function(){
//       bottone.addClass('classToAdd');
//     }
//   );
//   bottone.mouseleave(
//       function(){
//         bottone.removeClass('classToAdd');
//       }
//     );
