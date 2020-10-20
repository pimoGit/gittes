//  DESCRIZIONE EX: Inserisci due parole, quale è la piu lunga?

var msg;

// input: utente inserisce  parola uno
var parola1 = prompt("inserisci la prima parola");

// input: utente inserisce  parola due
var parola2 = prompt("inserisci la seconda parola");

console.log(parola1.length, parola2.length);

// verifico quale parola sia più lunga
  // se parola1 è più lunga
  if (parola1.length > parola2.length){
    // creo messaggio corrispondente
    msg = "parola1 è più lunga";
    console.log("parola1 è più lunga");
  } else if (parola2.length > parola1.length) { // se parola2 è più lunga
   //creo messaggio corrispondente
    msg = "parola2 è più lunga";
    console.log("parola2 è più lunga");
  } else { // altrimenti se sono ugulai
     // creo messaggio corrispondente
     msg = "le parole sono lunghe uguali";
    console.log("le parole sono lunghe uguali");
  }





// output: per dire quale parola è più lunga
document.getElementById('titolo').innerHTML = msg;
