// a = 0;
// b = "buongiorno";
// var c = "ciao";

var varGlobale = "mi vedono tutti";

console.log(saluta());
// console.log("ilvalore ritornato dalla funzione è: ", valoreRitornato);
//
// console.log("a is " + a);
// console.log("b is " + b);

function saluta() {
  // var d = "asd";
  // console.log("a is " + a);
  // var b = a + 1;
  // console.log("b is " + b);
  // console.log(c);
  var varInterna = "non puoi vedermi da fuori!!";
  console.log("la var interna cercata dallo scope locale è: ", varInterna);
  console.log("la var globale cercata dallo scope locale è: ", varGlobale);

  return varInterna;
}

console.log("la var interna cercata dallo scope globale è: ", varInterna);
