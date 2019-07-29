

$( document ).ready(function() {


     var apirandnum = "https://flynn.boolean.careers/exercises/api/random/int";


      //chiediamo all'utente num tra 0 e 9
      var numutente = parseInt(prompt("inserisci un numero da 0 a 9"));
      console.log("numero utente", numutente);
      

      //richiediamo via ajax all'API un numero random
      $.ajax(
         {
            url : apirandnum,
            method: "GET",
            success: function(data){
               var numapi = data.response;
               console.log("num api", numapi);

                  //confrontiamo i 2 numeri  e output chi ha vinto
                  if(numapi > numutente){
                     $(".randnum").text("hey tu utente hai perso!");
                  } else if (numapi < numutente){
                     $(".randnum").text("hey tu utente hai vinto! però stai calmo.");
                  } else {
                     $(".randnum").text("acciderbolina sono pari!");
                  }
            },
            error: function(richiesta,stato,errore){
               console.log("c'è un problema con il server",richiesta,stato,errore);
            }
         }
      );








//   $.ajax(
//      {
//         url : apirandnum,
//         method: "GET",
//         success: function(data){
//          console.log(data);
//          $(".randnum").text(data.response);
//         },
//         error: function(){
//             console.log("c'è stato un errore riprova più tardi.")
//         }
//      }
//   );
     
//      console.log("io sono prepotente e voglio apparire prima!");





});