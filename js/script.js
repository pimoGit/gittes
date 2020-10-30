/*un esempio possibile di Campo minato*/


// setto variabili da usare
var nMina, possibilita = 84, boom = false, inputUser, count = 0;
var mine = []; //array numeri mina
var numUser = []; // array numeri inseriti dall'utente

// genero lista mine
while (mine.length < 16) { // fino a che la lista mine non è di 16

 nMina = Math.floor(Math.random() * 100) + 1; // genero un num random
 if(!mine.includes(nMina)) { // verifico che il num non sia già inserito
   mine.push(nMina);
 }
}
// console.log(mine);


//  GIOCO completo
// finche user non becca una mina o non raggiunge il massimo delle possibilità
while(boom === false && numUser.length <= possibilita){

 // salvo input utente
 inputUser = parseInt(prompt("inserisci un numero nuovo"));

 if(mine.includes(inputUser)){ // se beccata una mina
   boom = true;
   console.log("numero bomba: ", inputUser);
 } else if (numUser.includes(inputUser)) { // se numero già inserito
   alert("numeo già inserito");
 } else { // altrimenti
   numUser.push(inputUser);
   count++;
 }
}

console.log(mine, numUser);

console.log("Gioco finito, hai fatto " + count + " punti!");
