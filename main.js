// Gioco: pari o dispari?

var result, msg;

// chiediamo all'utente di scegliere tra pari e dispari
var userChoice = prompt("scegli se puntare su pari o dispari");

// chiediamo all'utente di fare la sua puntatata (numero tra 1-5)
var userNum = parseInt(prompt("scegli un numero tra 1 e 5"));

// pc punta numero (numero tra 1-5)
var pcNum = Math.floor(Math.random() * 5) + 1;

// faccio somma dei 2 numeri
var sum = userNum + pcNum;

console.log("numero utente= " +  userNum);
console.log("numero PC= " +  pcNum);
console.log("somma= " +  sum);


// cerco di capire se la somma sia pari o dispari (mi salvo la cosa)
if (sum % 2 === 0){
  result = "pari";
} else {
  result = "dispari";
}

// cerco di capire sulla base della valore di pari o disp di somma se ha vinto l'untete o il pc
if (result === userChoice ){
  msg = "Ha vinto lo user";
} else if ( result !== userChoice){
  msg = "Ha vinto il PC";
}



// dò output di chi ha vinto
document.getElementById('mio_id').innerHTML = msg;
