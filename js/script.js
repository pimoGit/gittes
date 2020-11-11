 {
  var variable = 'pippo';
  let secondVariable = 10;
  const constantVariable = 'constance';
}

console.log(variable);
//'pippo'
console.log(secondVariable);
// Uncaught ReferenceError: secondVariable is not defined
console.log(constantVariable);
// Uncaught ReferenceError: constantVariable is not defined
