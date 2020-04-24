// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.

$(document).ready(function () {

  var contPage = $('.box');
  var apiKeyVar = "e99307154c6dfb0b4750f6603256716d";

  // inizializzazione template handlebars
  var source = $('#movie-template').html();
  var template = Handlebars.compile(source);

  // salvo input utente
  //var variabileName = //quello che devo salvare;

  $('#invioQuery').click(function () {
    // reset di pagina
    contPage.html("");

    // salvo valore input
    var stringaRichiesta = $('#queryString').val();

    // richiesta film
    inviaChiamataAjax("film",apiKeyVar,stringaRichiesta,"https://api.themoviedb.org/3/search/movie");

    // richiesta serie TV
    inviaChiamataAjax("tv",apiKeyVar,stringaRichiesta,"https://api.themoviedb.org/3/search/tv");

  });





 // FUNZIONI

 // funzione di output generale
 function generaOutput(listaOggetti, tipo) {

   for (var i = 0; i < listaOggetti.length; i++) {
     var movie = listaOggetti[i];

     var title, orgiginalTitle;

     // se tipo è movie
     if(tipo === "film"){
       // allora var titoloGenerato = movie.title
       title = movie.title;
       orgiginalTitle = movie.original_title;

    // se tipo è tv
     } else if (tipo === "tv"){
       title = movie.name;
       orgiginalTitle = movie.original_name;
     }




     var context = {
       titolo: title,
       titoloOriginale: orgiginalTitle,
       lingua: flagGenerator(movie.original_language),
       voto: votoStelle(movie.vote_average),
       tipoRichiesta: tipo,
       poster: posterGenerator(movie.poster_path)
     };

     var html = template(context);

     contPage.append(html);

   }

 }

  // funzione di output voto in stelline
  function votoStelle(voto) {
    // passo da voto base 10 a voto base 5
    var votoBase5 = Math.ceil(voto/2);

    var stars = "";

    for (var i = 1; i <= 5; i++) {
        if(i <= votoBase5){
        // <!-- stella piena -->
  			stars += '<i class="fas fa-star"></i>';
      } else {
        // <!-- stella vuota -->
  			stars += '<i class="far fa-star"></i>';
        // stars = stars + '<i class="far fa-star"></i>';
      }
    }
    return stars;
  }

  // funzione di output bandierine
  function flagGenerator(codiceLang) {
    // lista imgs presenti in cartella img
    var images =  ["it", "en"];
    var imgGenerata;

    if(images.includes(codiceLang)){
      imgGenerata = '<img src="img/' + codiceLang + '.svg" alt="immagine" class="flags" >';
      return imgGenerata;
    }
    return codiceLang;
  }

  // funzione di output poster img
  function posterGenerator(endUrlImg) {
    var risultato;

    if(endUrlImg){
      var urlImg = "https://image.tmdb.org/t/p/w92" + endUrlImg;
      risultato = '<img src="' + urlImg + '" alt="immagine poster" class="poster" >';
    } else {
      risultato = "poster non disponibile"
    }

    return risultato;
  }



  // funzione chiamate ajax
  function inviaChiamataAjax(tipo,apikey,queryArg,url) {

    $.ajax({
      url: url,
      method: "GET",
      // utilizzo data object per aggiungere query a request API
      data: {
        api_key: apikey,
        language: "it-IT",
        query: queryArg
      },
      success: function(data,stato) {
        // console.log(data);
        var movieList = data.results;
        // console.log(movieList);

        generaOutput(movieList, tipo);

      },
      error: function(richiesta,stato,errore){
        alert("Chiamata fallita!!!");
      }
    });

  }



});
