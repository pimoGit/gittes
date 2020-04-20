// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.

$(document).ready(function () {

  var source = $('.album-template').html();
  var template = Handlebars.compile(source);


  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data,stato) {
      var album = data.response;
      console.log(album);
      for (var i = 0; i < album.length; i++) {
        var context = {
          cover: album[i].poster,
          title: album[i].title,
          artist: album[i].author,
          year: album[i].year
        };
        var html = template(context);
        $('.box').append(html);
      }
    },
    error: function(richiesta,stato,errore){
      alert("Chiamata fallita!!!");
    }
  });











});
