 // Data una struttura html selezionare gli elementi indicati e applicare loro una classe con la funzione .addClass()
var titolo = $("h1");

titolo.addClass("classe-aggiunta");
console.log(titolo);


// $("p").addClass("classe-aggiunta");
$("p.paragrafo-sel").addClass("classe-aggiunta");

$("#divvone").addClass("classe-aggiunta");


$("ul  li:first-child").addClass("classe-aggiunta");

$("div").removeClass("elementoacaso");
