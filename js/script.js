 // Simulare un countdown di 10 secondi che alla fine dice buon anno


var mioInterval = setInterval(countdown, 200);


// function countdown() {
//   for(var i = 10; i > 0;  i--){
//     console.log(i);
//   }
//   console.log("Buon anno");
//   clearInterval(mioInterval);
// }

var count = 10;

function countdown() {
  if(count > 0) {
    console.log(count);
    count--;
    //count = count-1
  } else {
    console.log("Buon anno!!!");
    clearInterval(mioInterval);
  }

}
