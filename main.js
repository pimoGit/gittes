

$( document ).ready(function() {

//funzione del next

   $(".next").click(nextimg);



   // function nextimg() {
   //    var activeimg = $(".images img.active");
   //    var activebully = $(".pallini span.active");

   //    activeimg.removeClass("active");
   //    activebully.removeClass("active");

   //    if(activeitem.hasClass("last")) {
   //       $(".pallini span.first").addClass("active");
   //    } else {
   //       activeimg.next("img").addClass("active");
   //       activebully.next("span").addClass("active");

   //    }


   // }


   function nextimg() {
      var activeitem = $(".images img.active, .pallini span.active");      
      activeitem.removeClass("active");

      if(activeitem.hasClass("last")) {
         $("img.first, .pallini span.first").addClass("active");
      } else {
         activeitem.next().addClass("active");
      }


   }



   //funzione del prev

   $(".prev").click(previmg);

   function previmg(){
      var activeimg = $(".images img.active");
      activeimg.removeClass("active");

      if(activeimg.hasClass("first")){
         $("img.last").addClass("active");
      } else {
         activeimg.prev("img").addClass("active");
      }

   }





});