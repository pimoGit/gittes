// Data una struttura html selezionare gli elementi indicati e
// applicare loro una class con addClass

var titolo = $('h1');

var par = $('p, p.pclass');

console.log(titolo);

titolo.addClass('classToAdd');

par.addClass('classToAdd');


$('#divId').addClass('classToAdd');
