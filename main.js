// Crea un array di numeri, e crea un array nuovo contenente i numeri raddoppiati dell'originale 

var nums = [1,4,7,9,5,2,8,9,10];

var numsDouble = [];
var numx2;


for (var i = 0; i < nums.length; i++){

    // numsDouble[i] = nums[i] * 2;

    numx2 = nums[i] * 2;

    numsDouble.push(numx2);

    console.log(numsDouble);
    

}


// console.log("l'array di partenza è: ",nums, "l'array nuovo è: ", numsDouble);




/*
// Crea un array di numeri, e crea un array nuovo contenente solo i numeri pari dell'array originale

var nums = [1,4,7,9,5,2,8,9,10];

var numpari = [];

for (var i = 0; i < nums.length; i++){

    var itemLoop = nums[i];

    if(itemLoop % 2 == 0){
        numpari.push(itemLoop);
    }

}

console.log("l'array di partenza è: ",nums, "l'array nuovo è: ", numpari);


*/



/*
// Crea un array di numeri, e stampa solo gli elementi in posizione dispari

// var nums = [1,4,7,9,5,2,8,9,10];
var nums = ["1", "5", "4", "3","8"];

console.log("array: ", nums);


// for (var i = 1; i < nums.length; i = i+2){
//     console.log(nums[i]);
    
// }

for (var i = 0; i < nums.length; i++){

    if(i % 2 !==0){
        console.log(nums[i]);
    }
    
}

*/





/*
// Crea un array di numeri, e stampa solo i numeri dispari


var nums = [1,4,7,9,5,2,8,9,10];

for (var i = 0; i < nums.length; i++){
    
    var arrayitemcilo = nums[i];

    if (arrayitemcilo % 2 !== 0){
        console.log(arrayitemcilo);
    }
    
}

*/



/*

// Crea un array contenente 5 nomi e stampali a schermo


var nomi = ["Mario", "Pippo", "Remo", "Pluto","Paperino"];


for (var i = 0; i < nomi.length; i++){
    console.log(nomi[i]);
}

*/







/*
// Stampa tutti i numeri da 1000 a 0
for (var i = 1000; i >=0; i--){
    console.log(i);
    
}

console.log("siamo usciti dal ciclo", "e il valore di i é: " + i);

*/


/*
// Stampa tutti i numeri da 0 a 1000

for (var i = 0; i <=1000; i++){
    console.log(i);  
}

console.log("siamo usciti dal ciclo", "e il valore di i é: " + i);


// console.log(1);
// console.log(2);
// console.log(3);
// ...
*/














// Crea un array contenente 3 nomi. 
// Chiedi un numero da 0 a 2 all’utente 
// e stampa l’elemento dell’array corrispondente.

/*
var iscritti;

// var iscritti = new Array();

iscritti = ["Mario", "Filippo", "Giovanna", 1, ["arrayi nterno", 5, 4], 3, "stringa"];

console.log("ouput di array con vari valori",iscritti[4][1]);


// iscritti.push("Michele", "MARIANO");



// MEGLIO NON FARLO PER NON CREARE BUCHI NELL'ARRAY
// console.log(iscritti.length, iscritti);

// iscritti[10] = "Simone";

console.log("dopo ulteriore aggiunta", iscritti.length, iscritti);

var lungarray = iscritti.length ;


var num = parseInt(prompt("inserisci un numero tra 0 e " + lungarray));

document.getElementById("mioid").innerHTML = iscritti[num];

*/


// if (num == 0) {
//     document.getElementById("mioid").innerHTML = iscritti[0] ;
// } else if (num == 1) {
//     document.getElementById("mioid").innerHTML = iscritti[1] ;
// } else {
//     document.getElementById("mioid").innerHTML = iscritti[2] ;
// }






// Chiedi un numero all’utente e stampa in console il numero successivo.

// var numero = parseInt(prompt("scrivi un numero"));

// // var numplus = numero++;

// document.getElementById("mioid").innerHTML = "il numero scelto è " + numero + " il numero successivo è " + (numero++);

// console.log(numero);
