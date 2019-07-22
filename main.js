

$( document ).ready(function() {


   $("#sendmsg").click(
      function(){
         //salvo valore inserito dall'utente
         var inputval = $("#msginput").val();
         // console.log(inputval);

         //butto in pagina il messaggio
         //   $(".container").append(
         //      "<div class='msg'>" + inputval + "</div>"
         //   );
         
         var msgelement = $("#template .msg").clone();
         // console.log(msgelement);
         msgelement.text(inputval);
         $(".container").append(msgelement);
         
           
           //pulisco l'input alla fine
           $("#msginput").val("");


      }
   );


   // var altrocoso = $("#template .altrodaclonare").clone();
   


});