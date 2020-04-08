
$(document).ready(function(){


var chatWin = $('.right-messages');
var inputMsg = $('.new-message-inputs');
var buttonSend = $('.right-footer-icon.f-right');

//gestisco evento su bottone di invio
buttonSend.click(
  function () {
    var msg = inputMsg.val();
    // console.log(msg);
    chatWin.append('<div class="message sent"><span class="message-text">' + msg + '</span><i class="fa fa-chevron-down f-right message-options"></i><span class="message-time">23:26</span></div>');
    inputMsg.val("");

    //dopo un secondo
    // deve apparire un nuovo msg con un testo sempre uguale (statico)
  }
);


// filtro contatti
  //gestirte evento su tastiera (oppure su click di bottone di input ricerca)

  // salvarmi input utente in campo del filtro (stringa1)

  // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
    //salvo in una var il valore del testo del nome nel contatto (stringa2)

    // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
      //stringa2.includes(stringa1)
      //se l'occorenza è stata trovata lascio il blocco di contatto visibile
      // altrimenti lo rendo non visibile (this)


});
