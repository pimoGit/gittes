for (var i = 0; i < 10; i++){
    var newNumber = getRandomNumber(1, 100);

    console.log(newNumber);
}

function getRandomNumber(min, max){
    var totale = Math.floor(Math.random() * (max - min + 1) + min);
     return totale;
}



 // Math.floor(Math.random() * (100 - 50 + 1) + 50);
//
// Math.floor(Math.random() * (20 - 5 + 1) + 5);
//
// getRandomNumber(50, 100);
 getRandomNumber(5, 20);
