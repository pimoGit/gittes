// EX SALUTO UTENTE + EX QUANDO SEI NATO?

// chiedo utente il nome
var inputuser = prompt("scrivi qui il tuo nome!!!");

// creao la stringa di saluto in base a nome utente
var saluto = "Ciao " + inputuser;

// chiedo età utente
var eta = prompt("quanti anni hai? inserisci un numero");

// calcolo anno di nascita
var annonascita = 2019 - eta;

// creo la stringa di output finale
var outputfin = saluto + " allora sei nato nel: " + annonascita;

//creao stringa per output anno di nascita
// var annonascita = saluto + " allora sei nato nel: " + (2019 - eta);

// document.writeln(annonascita);


// seleziono elemento html in cui fare output
var htmlElement = document.getElementById('mioid');

// // output finale su elemnto selezionato
htmlElement.innerHTML = outputfin;




// // EX SALUTO UTENTE
// var inputuser = prompt("scrivi qui il tuo nome!!!");

// var saluto = "anadate tutti a .. ciao!"
// console.log(saluto);


// var saluto = "Ciao " + inputuser;

// // console.log(saluto + inputuser);
// // console.log(saluto);
// // alert(saluto);

// document.getElementById('mioid').innerHTML = saluto;



// //EX QUANDO SEI NATO?
// var eta = prompt("quanti anni hai? inserisci un numero");

// var annonascita = saluto + " allora sei nato nel: " + (2019 - eta);

// var htmlElement = document.getElementById('mioid');

// console.log(htmlElement);

// htmlElement.innerHTML = annonascita;













// // dichiarazione
// var miaStringa, altrastringa; 
// // var altrastringa;

// var inputuser = prompt("inserisci un testo");

// console.log("valore ritornato dal prompt", inputuser, typeof inputuser)

// console.log("valore di variabile dichiarata ma non valorizzata", miaStringa);

// // console.log("valore variabile nenanche dichiarata",miaStringa2);


// miaStringa = 'true'; 
// // alert(miaStringa);
// console.log(miaStringa);


// miaStringa = 4; 
// // alert(miaStringa);
// console.log(miaStringa);

// miaStringa = '4'; 
// // alert(miaStringa);

// // console.log("qui ci aspettiamo un not defined",miastringa);

// altrastringa = miaStringa + 5;

// console.log(altrastringa);




// // document.writeln('Hello World!');
// // // alert('Hello World!');
// //
// document.getElementById('mioid').innerHTML = 'Hello "Word" 2!';

// // console.log(document.querySelectorAll('.miaclass'));

// // document.querySelectorAll('.miaclass')[0].innerHTML = 'questo contenuto si ripete in 2 blocchi';
