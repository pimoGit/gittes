// Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.


var bottone = $('button');

console.log(bottone);

bottone.mouseenter(function() {
  bottone.addClass("red");
  }
);

bottone.mouseleave(function() {
  bottone.removeClass("red");
});

// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente
bottone.dblclick(function() {
 // console.log(bottone.text());
 bottone.text("cliccato000oooooooooo!");

  }
);
