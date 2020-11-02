 // Creare il titolo di un paragrafo e un bottone che permette di espandere il testo inizialmente nascosto

$('p').hide();
var aperto = false;

$('button').click(function() {
  if(aperto === false){
    $('p').show();
    aperto = true;
  } else {
    $('p').hide();
    aperto = false;
  }
});
