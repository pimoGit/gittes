// Gioco: pari o dispari?

var esito;
var elemntoOutput = document.getElementById('titolo');

// INPUT GIOCO
  // l'utente fa la sua scommessa
  var scommessa = prompt("scommetti se pari o dispari");
  console.log(scommessa);

  // l'utente ci da un numero tra 1 e 5
  var numeroUser = parseInt(prompt("punta il tuo numero tra 1 e 5"));
  console.log("numero utente ",numeroUser);

  // il pc ci da il suo numero tra 1 e 5
  var numeroPc = Math.floor(Math.random() * 5) + 1;
  console.log("numero pc ",numeroPc);


// OPERAZIONI DI GIOCO
  // sommare i 2 numeri
  var somma = numeroUser + numeroPc;
  console.log("la somma è: ",somma);

  // stabilire se la somma uscita è pari o dispari
  if ((somma % 2) === 0) { // verifichiamo con operatore modulo se numero è pari
    // somma pari
    esito = "pari";
  } else {
    // somma dispari
    esito = "dispari";
  }

  console.log(esito);

  // stabilire se la scommessa dell'utente è stata vincente o meno
  // OUTPUT
  if (scommessa === esito) {
    elemntoOutput.innerHTML = "hai vinto tu caro utente!";
  } else {
    elemntoOutput.innerHTML = "hai perso tu caro utente!";
  }
