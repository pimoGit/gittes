// Quanti anni hai? Allora sei nato nel.


// creaiamo var per memorizzare età
var etaTizio;

// creaiamo var per anno corrente
var annoCorrente = 2020;

// creiamo var per anno di nascita
var annoDiNascita;

// chiedere l'età del tizio
etaTizio = prompt("inserisci la tua età");

// calcolare anno di nascita
annoDiNascita = annoCorrente - etaTizio;

// output per tizio per suo anno di nascita
document.getElementById('mio_id').innerHTML = "Allora sei nato nel: " + annoDiNascita;

// utilizzo debug
console.log("messaggio");
