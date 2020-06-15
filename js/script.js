// Chiedi all’utente il suo nome, poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19




// Chiedi all’utente il suo nome
var nome = prompt("inserisci il tuo nome");
console.log(nome);

// poi chiedi il suo cognome
var cognome = prompt("inserisci il tuo cognome");


// chiedi il suo colore preferito
var colore = prompt("inserisci il tuo colore preferito");


// creiamo la pwd: nomecognomecolorepreferito19
var pwd = nome + cognome + colore + "19";

// output in pagina
document.getElementById('title').innerHTML = "la tua segretissima password è: " + pwd;
