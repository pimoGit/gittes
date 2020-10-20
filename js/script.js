//  DESCRIZIONE EX: Inserisci due parole, quale è la piu lunga?

var msg;
var elementoSelezione = document.getElementById('titolo');

// input: utente inserisce  parola uno
var parola1 = prompt("inserisci la prima parola");
var lunghezzaParola1 = parola1.length;
// input: utente inserisce  parola due
var parola2 = prompt("inserisci la seconda parola");
var lunghezzaParola2 = parola2.length;

console.log(parola1.length, parola2.length);

// verifico quale parola sia più lunga
  // se parola1 è più lunga
  if (lunghezzaParola1 > lunghezzaParola2){
    // creo messaggio corrispondente
    msg = "parola1 è più lunga";
    console.log("parola1 è più lunga");
  } else if (lunghezzaParola2 > lunghezzaParola1) { // se parola2 è più lunga
   //creo messaggio corrispondente
    msg = "parola2 è più lunga";
    console.log("parola2 è più lunga");
  } else { // altrimenti se sono ugulai
     // creo messaggio corrispondente
     msg = "le parole sono lunghe uguali";
    console.log("le parole sono lunghe uguali");
  }





// output: per dire quale parola è più lunga
elementoSelezione.innerHTML = msg;
