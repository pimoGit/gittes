var titolo = document.getElementById('titolo');
var campoInput = document.getElementById('campoTesto');

console.log(campoInput.value);

var bottone = document.getElementById('mybutton');

bottone.addEventListener('click',
 function() {
   titolo.innerHTML = campoInput.value;
} );
