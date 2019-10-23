// Stampare a schermo una lista della spesa


var lista = ["Pane","latte","carne","proscuitto","guanciale","insalata"];

var messagio = document.getElementById('messaggio');

var cosaPresente = false;


//chiedo a utente una cosa  da comprare
var cosa = prompt("inserisci cosa da comprare");




// verifico che quella cosa non sia già presente nella lista
// for (var j = 0; j < lista.length; j++){

//     if(cosa === lista[j]){
//         cosaPresente = true;
//     } 

// }

var j = 0;
while(j < lista.length && !cosaPresente ){

    if(cosa === lista[j]){
        cosaPresente = true;
    } 
    console.log("la mia interazione è arrivata a: ",j);
    

    j++;
}






// se è presente glielo dico
if(cosaPresente === true){
    messagio.innerHTML = "la cosa è già in lista";
// sennò aggiungo alla lista
} else {
    messagio.innerHTML = "la cosa NON è già in lista";
    lista.push(cosa);
}







// stampo elenco della lista
var i = 0;
var contenutoPrecedente;

while (i < lista.length){
    // console.log(lista[i]);
    // document.getElementById('mioid').innerHTML += "<li>" + lista[i] + "</li>";

    contenutoPrecedente = document.getElementById('mioid').innerHTML;

    console.log("il valore all'interazione numero" + i + " di contenutoPrecedente è uguale a: ",contenutoPrecedente);
    

    document.getElementById('mioid').innerHTML = contenutoPrecedente + "<li>" + lista[i] + "</li>";

    i++;
}




/*
// traduci in un ciclo while


var nomi = ["nome1","nome2","nome3","nome4","nome5","nome6"];

// for (var i = 0; i < nomi.length; i++){ 
//     console.log(nomi[i]);
// }

// versione while


var i = 0;
while (i < nomi.length){
    //istruzione da eseguire
    console.log(nomi[i]);
    // incremento - cambio della condizione per raggiungere l'uscita dal loop
    i++;
}


// var i = 6;

// do{
//     //istruzione da eseguire
//     console.log(nomi[i]);
//     // incremento - cambio della condizione per raggiungere l'uscita dal loop
//     i++;
// } while (i < nomi.length);

*/