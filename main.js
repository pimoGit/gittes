var utente = {
    nome : [];
};

var nomeinput = prompt("inserisci il nome dell'utente");
var cognomeinput = prompt("inserisci il cognome dell'utente");
var etainput = prompt("inserisci l'età dell'utente");

utente.nome = nomeinput;
utente.cognome = cognomeinput;
utente.eta = etainput;

console.log("stampo utente: ", utente);






var palla = {
    "pre-colore" : "giallo",
    "tipo" : "supertele",
    "diametro" : 5,
    "caratteristiche": ["bella","tonda","leggiadra"],
    "grafica" : {
        "rombi" : 4,
        "sfondo" : "#000"
    },
    "rotola" : function() {
        console.log("sto rotolando");  
    }
};



console.log("colore della palla: ", palla.colore, "diametro: ", palla.diametro);

console.log("caratteristiche index 0: " + palla.caratteristiche[0]);



for (var prop in palla){
    console.log("le propietà dell'oggetto sono: " + prop + " e il valore è: " + palla[prop]);
    
}

palla.peso = 50;

palla.rotola();


/*

// Verifico attraverso una funzione se il numero passato dell’utente è pari o dispari

var numutente = parseInt(prompt("inserisci un numero"));

var risultatocheck = pariodispari(numutente);

console.log("risultato check numero utente = " + risultatocheck);


console.log("10k righe dopo", pariodispari(15));


// Blocco mie funzioni
function pariodispari(numpassato){
    var parodisp;
    if(numpassato % 2 === 0){
        parodisp = "pari";
        // return "pari";
    } else {
        parodisp = "dispari";
        // return "dispari";
    }
    return parodisp
}

*/


/*
// Genero 10 numeri random utilizzando una funzione
var numgen;



for (var i = 0; i < 10; i++){
    numgen = randomGenerator(100, 20);
    console.log(numgen);
}




// blocco funzioni

function randomGenerator (max, min){
    var intNUm = Math.floor(Math.random() * (max - min + 1)) + min;
    return intNUm;
}
*/




/*
var a = 0;
var b = "buongiorno";
var c = "ciao";
var d;

saluta();

console.log("a is " + a);
console.log("b is " + b);

function saluta(){
d = "asd"; 
console.log("a is " + a); 
var b = a + 1; 
console.log("b is " + b); 
console.log(c);
}


function megasvcriptone(){

    var dsfdsdsfdsf
}

megasvcriptone();

*/