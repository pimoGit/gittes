
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
  }
);


});
