

$( document ).ready(function() {


   $("#sendmsg").click(
      function(){
         //salvo valore inserito dall'utente
         var inputval = $("#msginput").val();
         // console.log(inputval);

         
         // var msgelement = $("#template .msg").clone();
         // // console.log(msgelement);
         // msgelement.text(inputval);
         // $(".container").append(msgelement);

         var source   = $("#msgtemplate").html();
         console.log(source);
         
         var template = Handlebars.compile(source);
         console.log("iltemplate è" + template);

         var context = {text: inputval, addclass: "sent", urlimg: "https://freewebsitetemplates.com/images/forum/500/ecologicalwebsitetemplate.jpg"};
         var html    = template(context);

         $(".container").append(html);
         
           
           //pulisco l'input alla fine
           $("#msginput").val("");


           //messaggio di risaposta

         setTimeout(reply,1000);

         function reply(){

         var contextrips = {text: "risposta pc! 'zzo vuoi!", addclass: "risp"};
         var htmlrips    = template(contextrips);

         $(".container").append(htmlrips);

         }
           


      }
   );


   // var altrocoso = $("#template .altrodaclonare").clone();
   


});