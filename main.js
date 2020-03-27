// Il software deve chiedere all’utente il suo nome
// e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”,
// il colore del nome deve essere azzurro
// o rosa a seconda del sesso inserito


var nome = prompt("nome");
var sesso = prompt("sesso");

var elm = document.getElementById('nome2');

elm.innerHTML = nome;

if (sesso === "m"){
  // elm.style.color = "lightblue";
  elm.className = "maschio";
} else if (sesso === "f"){
  // elm.style.color = "pink";
  elm.className = "femmina";
}
