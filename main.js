$( document ).ready(function() {
    
    // Creare il titolo di un paragrafo e un bottone che permette di espandere 
    // il testo inizialmente nascosto

    var elem = $(".accordion");

        // elem.hide();

        $("#controller").click(function(){
            // elem.show(2000);
            elem.addClass("visible");
        });





    // Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.
    // Con il doppio click cambio il testo in “cliccato”. Con un click solo non fa niente


    /*
    // $("#messaggio").show(2000);

    $("#mybutton").on({
        mouseenter: function() {
            $( "p" ).addClass( "red" ); },
        mouseleave: function() {
            $( "p" ).removeClass( "red" ); },
        dblclick: function(){
            $("#mybutton").text("cliccato"); 
            $("#messaggio").hide(2000);
            // $("#messaggio").fadeOut();
        }


    });
*/
    


    /*
    $("div.miaclasse").addClass("nuovaclasse");

    $("p:first").addClass("paragraphclasse");
*/






});