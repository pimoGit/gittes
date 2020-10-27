// Verifico attraverso una funzione se il numero passato dell’utente è pari o dispari

var inputUser = parseInt(prompt("inserisci un numero"));

var risultatoPariODispari = verificaPariODispari(inputUser);

console.log(risultatoPariODispari);


//  definisco funzione
function verificaPariODispari(numero) {
  if(numero % 2 === 0){
    return "pari";
  } else {
    return "dispari";
  }
}
