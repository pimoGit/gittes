
 // Al click di un pulsante,
 // deve apparire un alert con un numero random


 var bottone = document.getElementById('mioButton');



bottone.addEventListener("click",
  function(){
    var random = Math.floor(Math.random() * 10 ) +1;
    alert(random);
  }
)
