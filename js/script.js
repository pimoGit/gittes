/*
commento
multi riga
*/

// dichiarazione variabili globali
var miaStringaUno, miaStringaDue, miaStringaTotale;
var numeroUno, numeroDue, numeroTot;

// lavoriamo con le stringhe
miaStringaUno = " socrate diceva che 'chi si fa i zzi suoi canmpa 100 nanni'  ";
miaStringaDue = "10";

console.log(miaStringaUno, miaStringaDue);

miaStringaTotale = miaStringaUno + miaStringaDue;

document.getElementById('titolo').innerHTML = miaStringaTotale;

// lavoriamo con i numeri

numeroUno = 10;
numeroDue = 7;
numeroTot = numeroUno + numeroDue;

document.getElementById('stampanumero').innerHTML = numeroTot;
