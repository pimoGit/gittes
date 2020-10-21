// Il software deve chiedere all’utente il suo nome e il sesso
// con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”,
// il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

// selezione elemento
var el = document.getElementById('titolo');

// chiedo nome nomeutente
var nome = prompt("inserisci il nome");

// chiedo sesso utente
var sesso = prompt("inserisci il sesso M o F");

// output nome in pagina
el.innerHTML = "Ciao " + nome;

// gestire colore output
if (sesso === "M") {
  el.className = "blu";
} else {
  el.className = "rosa";
}
