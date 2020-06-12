// RICHIESTA #1: Chiedere al visitatore il suo nome e salutarlo

// chiedere il nome e salvarlo in una var
var nome = prompt("inserisci il tuo nome:");

console.log("hey io vengo dopo il prompt!!!");

// creaimo il saluto completo
var saluto = "Ciao " + nome;

// salutare l'utente
document.getElementById('title').innerHTML = saluto;



// RICHIESTA #2: Quanti anni hai? Allora sei nato nel...

// chiedere all'utente la sua età
var eta = prompt("Quanti anni hai?");

// tengo traccia dell'anno in cui sono adesso
var annoCorrente = 2020;

// calcolo l'anno di nascita
var annoNascita = annoCorrente - eta;

//  output per l'utente
document.getElementById('title').innerHTML = "Sei nato presumibilmente nel: " + annoNascita;
