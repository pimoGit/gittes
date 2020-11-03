 // Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio.
$(document).ready(function () {


$(".faq p").hide();

$(".faq").click(function () {
  //$(".faq p").toggle();
  $(this).children("p").toggle();
})

});
