// chiedi all'utente quanti anni ha e digli in che anno è nato


// chiediamo a utente età
let age = parseInt(prompt("quanti anni hai?"));

// stabiliamo in che anno siamo
const anno = 2021;

// ricaviamo l'anno di nascita sottraendo l'età all'anno in cui siamo
let annoDiNascita = anno - age;

// console.log(annoDiNascita);

// gli diciamo in che anno è nato
document.getElementById("mio_id").innerHTML = `Sei nato nel ${annoDiNascita}`;
