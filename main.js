// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.

$(document).ready(function () {

  var contPage = $('.box');

  // inizializzazione template handlebars
  var source = $('#movie-template').html();
  var template = Handlebars.compile(source);

  // salvo input utente
  //var variabileName = //quello che devo salvare;

  $('#invioQuery').click(function () {

    // reset di pagina
    contPage.html("");

    var stringaRichiesta = $('#queryString').val();

    // console.log(stringaRichiesta);


    $.ajax({
      url: "https://api.themoviedb.org/3/search/movie",
      method: "GET",
      // utilizzo data object per aggiungere query a request API
      data: {
        api_key: "e99307154c6dfb0b4750f6603256716d",
        language: "it-IT",
        query: stringaRichiesta
      },
      success: function(data,stato) {
        // console.log(data);
        var movieList = data.results;
        console.log(movieList);

        generaOutput(movieList);

      },
      error: function(richiesta,stato,errore){
        alert("Chiamata fallita!!!");
      }
    });



  });





 // FUNZIONI

 function generaOutput(listaOggetti) {

   for (var i = 0; i < listaOggetti.length; i++) {
     var movie = listaOggetti[i];

     // se tipo è movie
     // allora var titoloGenerato = movie.title
     // se tipo è tv
     // var titoloGenerato = movie.name

     var context = {
       titolo: movie.title,
       titoloOriginale: movie.original_title,
       lingua: movie.original_language,
       voto: movie.vote_average
     };

     var html = template(context);

     contPage.append(html);

   }

 }




});
