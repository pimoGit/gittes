// chiedere all'utente quanti anni ha
var eta = parseInt(prompt("Scrivi quanti anni hai"));
var email = prompt("inserisci la tua email");
var annoCorrente = 2020;
var annoNascita;
console.log(email, eta);

annoNascita = annoCorrente - eta;
console.log("l'output sarà ", annoNascita);

// dire all'utente in che anno è nato
document.getElementById('titolo').innerHTML = "Hai " + eta + " anni, allora sei nato nel " + annoNascita + " ti invieremo questo dato inaspettato alla mail: " + email;
