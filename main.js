

$( document ).ready(function() {


   var mydate = moment();

   console.log(mydate);

   $("#date").html(mydate.format("dddd- Do - MMMM - YYYY"));

   var pastdate = moment("1995-12-25");

   console.log("data parsata", pastdate);
   
   $("#date").append(pastdate.format("<br> dddd"))



});