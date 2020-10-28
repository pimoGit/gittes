'use strict';


a = 0;
b = "buongiorno";
var c = "ciao";

saluta();

console.log("a is " + a);
console.log("b is " + b);

function saluta() {
  varGlob = 5;
  var d = "asd";
  console.log("a is " + a);
  var b = a + 1;
  b = b + 11;
  console.log("b is " + b);
  console.log(c);
}
