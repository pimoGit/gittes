// Gioco: pari o dispari?

var pariodisp, sceltauser, numuser, numpc, somma;


// chiedo utente di scegliere tra pari o dispari
sceltauser = prompt("scegli tra pari o dispari");
console.log("hai scelto " + sceltauser);


// chiedo utente numero da 1 a 5 (la sua puntata) [forzando il valore a numero]
numuser = parseInt(prompt("scegli un numero tra 1 e 5"));

// pc fa puntata numero random tra 1 e 5
numpc = Math.floor(Math.random() * 5) +1 ;

// console.log(numpc);


// sommo i numeri delle puntate 
somma = numuser + numpc;
console.log(numuser, numpc, somma);

// e verifico se somma è pari o dispari e memorizzo il risultato
if(somma % 2 === 0){
    pariodisp = "pari";
} else {
   pariodisp = "dispari";
}


// a seconda del risultato dico chi ha vinto
    //la scelta dell'utente è uguale al valore della var pariodisp
if( sceltauser === pariodisp ){
    // ha vinto
    console.log('hai vinto!'); 
} else {
    //ha vinto il pc
    console.log('ha vinto il pc!');
    
}























// Inserisci due parole, quale è la piu lunga?

// l'utente inserisce 2 parole in input
// var parola1 = prompt("inserisci la prima parola");
// var parola2 = prompt("inserisci la seconda parola");

// console.log(parola1, parola2);



// capire come confrontarte la lunghezza di 2 stringhe
// https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/String/length
// console.log(parola1.length, parola2.length);
// var nCharParola1 = parola1.length;
// var nCharParola2 = parola2.length;

// console.log(nCharParola1, nCharParola2);



// confrontarle per dire in output qualle delle 2 è più lunga 
// (dare come output la parola più lunga)


// VERSIONE DI ESEMPIO
// if (nCharParola1 > nCharParola2){
//     document.getElementById('mioid').innerHTML = "la parola più lunga è " + parola1;
//     console.log("la parola più lunga è " + parola1);
    
// }

// if (nCharParola2 > nCharParola1) {
//     document.getElementById('mioid').innerHTML = "la parola più lunga è " + parola2;
//     console.log("la parola più lunga è " + parola2);
    
// } 

// if (nCharParola2 == nCharParola1){
//     document.getElementById('mioid').innerHTML = "le parole sono uguali in lunghezza";
//     console.log("le parole sono uguali in lunghezza");
// }

// VERSIONE OTTIMIZZATA
// if (nCharParola1 > nCharParola2){
//     document.getElementById('mioid').innerHTML = "la parola più lunga è " + parola1;
//     console.log("la parola più lunga è " + parola1);
    
// } else if (nCharParola2 > nCharParola1) {
//     document.getElementById('mioid').innerHTML = "la parola più lunga è " + parola2;
//     console.log("la parola più lunga è " + parola2);
    
// } else {
//     document.getElementById('mioid').innerHTML = "le parole sono uguali in lunghezza";
//     console.log("le parole sono uguali in lunghezza");
// }
