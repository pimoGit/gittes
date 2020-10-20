// Inserisci con due prompt l’età di due persone (persona1, persona2)
// e stampa a schermo il numero più grande.

var etaUno = parseInt(prompt("inserisci la tua età"));
var etaDue = parseInt(prompt("inserisci la tua età"));

if (etaUno > etaDue) {
  console.log(etaUno);
} else if (etaUno < etaDue) {
  console.log(etaDue);
} else {
  console.log("le età sono uguali");
}
