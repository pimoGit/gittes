 $( document ).ready(function() {

   //drop menù su hamburger
   $("#dropcont > a").click(
      function(){
         // $("#drop").toggle(1000);
         $("#drop").toggleClass("active");
      }
   );


});