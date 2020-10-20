// Chiedi all’utente il suo nome
var nome = prompt("inserisci il tuo nome");

// poi chiedi il suo cognome
var cognome = prompt("inserisci il tuo cognome");

// poi chiedi il suo colore preferito
var colore = prompt("inserisci il tuo colore preferito");

// creazione var di appoggio per uso pwd
var pwd = nome + cognome + colore + "19";


// Infine scrivi sulla pagina nomecognomecolorepreferito19
document.getElementById('titolo').innerHTML = "la tua inisicurissima password è: " + pwd;
