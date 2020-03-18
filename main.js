// Chiedere al visitatore il suo nome e salutarlo


// creaimo var per memorizzare input utente
var nomeUtente;

// chiediamo al visitatore il suo nome
// e lo salviamo nella var creata
nomeUtente = prompt("inserisci il tuo nome");



// salutare il visitatore aggiungendo il suo nome
document.getElementById('mio_id').innerHTML = "Ciao " + nomeUtente;

nomeUtente = "Olmo";

console.log(" in realtà caro" +  nomeUtente + "sei un pò str..");
