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

    // richiesta film
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

        generaOutput(movieList, "film");

      },
      error: function(richiesta,stato,errore){
        alert("Chiamata fallita!!!");
      }
    });

    // richiesta serie TV
    $.ajax({
      url: "https://api.themoviedb.org/3/search/tv",
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

        generaOutput(movieList, "tv");

      },
      error: function(richiesta,stato,errore){
        alert("Chiamata fallita!!!");
      }
    });



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
       tipoRichiesta: tipo
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




});
