// chiedere all'utente quanti anni ha
var eta = prompt("Scrivi quanti anni hai");
var annoCorrente = 2020;
var annoNascita;
console.log(eta);

annoNascita = annoCorrente - eta;
console.log("l'output sarà ", annoNascita);

// dire all'utente in che anno è nato
document.getElementById('titolo').innerHTML = "Allora sei nato nel " + annoNascita;
