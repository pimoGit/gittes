console.log(variable); //undefined
var variable = 10;
variable = 'pippo';



console.log(variableNew);
//Uncaught ReferenceError: variableNew is not defined
let variableNew = 'pluto';
variableNew = variable + ' ' + variableNew;
