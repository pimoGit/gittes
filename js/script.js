// Inserisci con due prompt l’età di due persone (persona1, persona2)
// e stampa a schermo il numero più grande.



var elemento = document.getElementById('nomeutente');

var nome = prompt("inserisci il tuo nome");

elemento.innerHTML = nome;


elemento.style.color = "green";

elemento.className = elemento.classList + " redText";
