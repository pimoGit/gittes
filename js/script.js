//  Quanti minuti mancano alla fine dell’ora?



// setto i minuti in un'ora
var minutiInUnOra = 60;

// catturo i minuti attuali dalla macchina dell'utente
var date = new Date();
// console.log(m);
var minutiAttuali = date.getMinutes();
console.log(minutiAttuali);

// sottraggo i imunito ricavati dai minuti in un'ora
var minutiMancanti = minutiInUnOra - minutiAttuali;

// output
document.getElementById('title').innerHTML = "alla fine della lezione mancano " + minutiMancanti + " minuti";
