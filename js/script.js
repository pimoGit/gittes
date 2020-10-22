// Crea un array di numeri, e stampa solo i numeri dispari

var numeri = [1,3,2,4,5,6,7,8];


for (var i = 0; i < numeri.length; i++){
  var arrayItem = numeri[i];
  if (arrayItem % 2 !== 0){
    console.log(arrayItem);
  }
}
