 // Creare un bottone
 // che faccia aprire e chiudere un sipario.
$(document).ready(function(){

  $('button').click(
    function(){
      $('.sipario').slideToggle(2000,
        cbSlide
      );
    }
  )


  function cbSlide() {
    alert("ho finito l'animazione!");
  }

  // cbSlide();


});
