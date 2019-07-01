var elemento = document.getElementById("mio_id");
var risultato, sceltapd, sceltaNumd, scelatNumcpu, somma ;


// utente sceglie pari o dispari
sceltapd = prompt("scegli pari o dispari");
console.log(sceltapd);

// utente sceglie numero da 1 a 5
sceltaNumd = parseInt(prompt("scegli unnumero da 1 a 5"));
console.log(sceltaNumd);

// cpu genera numero da 1 a 5
scelatNumcpu = Math.floor(Math.random() * 5) + 1;
console.log(scelatNumcpu);

// sommo i 2 numeri e salvo il risultato in "somma"
somma = sceltaNumd + scelatNumcpu;
console.log(somma);

// verifico che la somma sia pari o dispari, salvandomi il valore "risultato"
 if (somma % 2 === 0) {
      risultato = "pari";
 } else {
      risultato = "dispari";
     //dispari
 }

// var temvar = somma % 2;
// console.log(temvar);


// stampo vincitore confrontando  che la scelta iniziale (utente) corrisponda o meno al valore "risultato"

if (risultato === sceltapd) {
    elemento.innerHTML = "hai vinto";
} else {
    elemento.innerHTML = "hai perso!!!!";
}