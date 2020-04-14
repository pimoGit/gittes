
$(document).ready(function(){


  var chatWin = $('.right-messages');
  var inputMsg = $('.new-message-inputs');
  var buttonSend = $('.right-footer-icon.f-right');
  var contatti = $('.contact');

  //gestisco evento su bottone di invio
  buttonSend.click(invioMsg);

  // filtro contatti
    //gestirte evento su tastiera (oppure su click di bottone di input ricerca)
  $('#contacts-filter').keyup(filtroContatti);

  //Click sul contatto mostra la conversazione del contatto cliccato
  contatti.click(mostraChat);


  // gestisci i sottomenù di cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
    // son riuascito ad agganciarte l'evento sul "delete" potrò dirgli una roba tipo this.padre.cancella();
    chatWin.on("click", ".message-options", optionMsgShow);

    // Cancella messaggio sul click del relativo "bottone" di delete
    chatWin.on("click", ".message-destroy", msgDistruggi);





// FUNZIONI


function invioMsg () {
  // è possibile inserire nuovi messaggi per ogni conversazione [attiva]
  var chatWinActive = $('.right-messages.active');

  var msg = inputMsg.val();
  // console.log(msg);
  chatWinActive.append('<div class="message sent"><span class="message-text">' + msg + '</span><i class="fa fa-chevron-down f-right message-options"></i><span class="message-time">23:26</span><div class="message-options-panel"><div class="message-destroy">Cancella messaggio</div></div></div>');
  inputMsg.val("");

  //dopo un secondo
  setTimeout(
    function(){
      chatWinActive.append('<div class="message received"><span class="message-text">OK!</span><i class="fa fa-chevron-down f-right message-options"></i><span class="message-time">23:26</span><div class="message-options-panel"><div class="message-destroy">Cancella messaggio</div></div></div>');
    }
    ,1000);
  // deve apparire un nuovo msg con un testo sempre uguale (statico)
}

function filtroContatti()  {

// salvarmi input utente in campo del filtro (stringa1)
var stringaFiltro = $(this).val().toLowerCase();


// selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
contatti.each(
  function () {
  //salvo in una var il valore del testo del nome nel contatto (stringa2)
  var stringaNome = $(this).find('.contact-name').text().toLowerCase();
  // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
    //stringa2.includes(stringa1)
    if(stringaNome.includes(stringaFiltro)){
    //se l'occorenza è stata trovata lascio il blocco di contatto visibile
      $(this).show();
    } else {
      // altrimenti lo rendo non visibile (this)
      $(this).hide();
    }

});
}


function mostraChat () {
  contatti.removeClass("active");
  $(this).addClass("active");
  // salvo il valore dell'attr e lo usso per dire quale chat è attiva
  var dataAttr = $(this).data("conversazione");
  // console.log(dataAttr);
  chatWin.removeClass("active");
  $('.right-messages[data-conversazione="' + dataAttr + '"]').addClass("active");
}


function optionMsgShow ()  {

 // ref a blocchetto msg padre della freccia su cui è registrato il click
 var msgInst = $(this).closest('.message');

 // sui fratelli del msg individuato, rendi non visibilio i sottomenù
 msgInst.siblings('.message').find('.message-options-panel').removeClass("active");

 msgInst.find('.message-options-panel').toggleClass("active");
}


function msgDistruggi () {
  // alert("hai cliccato su destroy");
  // ref a blocchetto msg padre della freccia su cui è registrato il click
  var msgInst = $(this).closest('.message');
  msgInst.remove();

}

});
