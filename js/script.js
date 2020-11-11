//funzione con nome
const myFunction = (x,y) => {
  console.log("stofacendo altro");
  return (x + y);
}

/* stessa cosa con sintassi diversa
const myFunction = function () {
  return 1 + 1;
}
*/

/* non uguale
function myFunction() {
    return 1 + 1;
}
*/


const resultFunction = myFunction(2,3);

console.log(resultFunction);
