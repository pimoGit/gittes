// Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.
 var noemVar = false;

var bottone = $('button');

console.log(bottone);



bottone.mouseenter(function() {
  bottone.addClass("red");
  noemVar = true;
  }
);


bottone.mouseleave(function() {
  bottone.removeClass("red");
});

// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente
// versione function anonima
/*
bottone.dblclick(function() {
 console.log(bottone.text());
 bottone.text("cliccato000oooooooooo!");
 alert("hofatto tutto!");
  }
);
*/

// versione function nominale
bottone.dblclick(cbDclick);



// DEFINIZIONE FUNZIONI

function cbDclick() {
 console.log(bottone.text());
 bottone.text("cliccato000oooooooooo!");
 alert("hofatto tutto!");
}
