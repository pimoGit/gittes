
var palla = {
   "colore": ["red","blue"],
   "tipo": "pallina da golf",
   "tipo2": "qualcosa",
   "chiave" : "altro valore"
   };

   var personaarr = ["mario","33","1.70","brutto"];

   var persona180 = {
      "nome": "mario",
      "eta": 33,
      "altezza": 1.70,
      "aspetto": "brutto",
      "user": "mariobrutto79"
   }

   var persona181 = {
      "nome": "marcello",
      "eta": 32,
      "altezza": 1.80,
      "aspetto": "bellissimo",
      "user": "marcvellobellismo80"
   }

   // persona.user;


   var utenti = [persona180, persona181];

   console.log("lo username del primo utente dell'array è: " + utenti[1].user);



   // console.log(palla.chiave);

   // console.log("palla peso prima", palla.peso);

   // palla.peso = 46;

   // console.log("palla peso dopo",palla.peso);

   palla.peso = [46, 60];

   // console.log("palla peso dopo riassegnazione",palla.peso);
   
   // console.log(palla);


   for (var key in palla) {
      // codice da eseguire
      // key prima sarà “prezzo” poi “tipo” 
      console.log("alla chiave: "+ key + " è assegnato il valore: " + palla[key]);
      }

// function randonum10 (max) {
//    var risultato = Math.floor(Math.random() * (max+1));
//    console.log("altre cose bellissime!");
//    return risultato;
// }

// function paridispari (numero) {
//    if(numero % 2 === 0){
//       return "pari";
//    } else {
//       return "dispari";
//    }

// }

// var numutente = parseInt(prompt("inserisci un numero"));

// var risultatoparita = paridispari(numutente);

// console.log(risultatoparita);

// // var numrandom1 = randonum10 (10);
// // var numrandom2 = randonum10 (20);
// // var numrandom3 = randonum10 (30);

// // console.log(numrandom1,numrandom2,numrandom3);



// // var listaspesa = [
// //     "latte",
// //     "pane",
// //     "fonzies",
// //     "carne",
// //     "seppia",
// //     "uova"
// // ]

// // var elemento = document.getElementById("mio_id");

// // var contenutoTemp;

// // var newelement = prompt("inserisci qualcosa da comprare");

// // listaspesa.push(newelement);


// //  for (var i = 0; i < listaspesa.length; i++) {
// //     //  console.log(listaspesa[i]);

// //     contenutoTemp = elemento.innerHTML;
// //     console.log(contenutoTemp);

// //     elemento.innerHTML = contenutoTemp + "<li>" + listaspesa[i] + "</li>";
// //  }

// // //  elemento.innerHTML =  listaspesa;


// // // var contenuto = [];

// // // for (var i = 0; i < listaspesa.length; i++) {
// // //     //  console.log(listaspesa[i]);



// // //     elemento.innerHTML = "<li>" + contenuto[j] + "</li>";
// // //  }

// // //  for(var j = 0; j < listaspesa.length; j++){
// // //     contenuto[j] = listaspesa[i];
// // //   }



// // // var nomi = ["nome1","nome2","nome3","nome4","nome5"];

// // // //  for (var i = 0; i < nomi.length; i++){ 
// // // //      console.log(nomi[i]);
// // // //  }


// // // //  var i = 0;
// // //  while (trovato === true){ 
// // //     console.log(nomi[i]);
// // //     if(qualcosa){
// // //         trovato = false;
// // //     }
// // // }


// // // var numarray = [3,6,2,17,22,5];

// // // for (var i = 0; i < numarray.length; i++){

// // //     if (numarray[i] % 2 != 0){
// // //         console.log(numarray[i]);
// // //     }
    
// // // }




// // // for (var i = 1000; i >= 0; i--){

// // //     console.log(i);
// // // }

// // // var mioarray = ["nome1","nome2","nome3","nome4","nome5"];

// // // console.log(mioarray.length);

// // // mioarray.push("nomaaltro");

// // // console.log(mioarray.length);

// // // for (var i = 0; i < mioarray.length; i++) {
// // //     console.log(mioarray[i]);
// // // }




// // // var nomi = [];

// // // nomi[0] = "Mario";
// // // nomi[1] = "Altro";
// // // nomi[2] = "Altro ancora";


// // // var numero = parseInt(prompt("numero tra 0 e 2!"));
// // // console.log("nuemro inserito", numero);

// // // console.log(nomi[numero]);

// // // console.log(nomi);

// // // nomi.push("alvolo!");

// // // document.getElementById("mio_id").innerHTML = nomi;













// // // var elemento = document.getElementById("mio_id");
// // // var risultato, sceltapd, sceltaNumd, scelatNumcpu, somma ;


// // // // utente sceglie pari o dispari
// // // sceltapd = prompt("scegli pari o dispari");
// // // console.log(sceltapd);

// // // // utente sceglie numero da 1 a 5
// // // sceltaNumd = parseInt(prompt("scegli unnumero da 1 a 5"));
// // // console.log(sceltaNumd);

// // // // cpu genera numero da 1 a 5
// // // scelatNumcpu = Math.floor(Math.random() * 5) + 1;
// // // console.log(scelatNumcpu);

// // // // sommo i 2 numeri e salvo il risultato in "somma"
// // // somma = sceltaNumd + scelatNumcpu;
// // // console.log(somma);

// // // // verifico che la somma sia pari o dispari, salvandomi il valore "risultato"
// // //  if (somma % 2 === 0) {
// // //       risultato = "pari";
// // //  } else {
// // //       risultato = "dispari";
// // //      //dispari
// // //  }

// // // // var temvar = somma % 2;
// // // // console.log(temvar);


// // // // stampo vincitore confrontando  che la scelta iniziale (utente) corrisponda o meno al valore "risultato"

// // // if (risultato === sceltapd) {
// // //     elemento.innerHTML = "hai vinto";
// // // } else {
// // //     elemento.innerHTML = "hai perso!!!!";
// // // }