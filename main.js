$( document ).ready(function() {


    // Creare una To do List. On click su un item verrà cancellata la riga. 
    // Una volta che l’item è nascosto, far comparire un modal: 
    // “Item Cancellato” e farlo scomparire subito dopo.


    
    // On click su un item verrà cancellata la riga.
    $(".delete").click(function(){
        $(this).parent("li").hide(1000,function(){
            // $("#modal").fadeIn(1000, function(){
            //     $(this).fadeOut();
            // });
            $("#modal").fadeIn(1000).fadeOut();
        //         $("#modal").fadeIn(1000);
        //         setTimeout(function(){
        //             $("#modal").fadeOut();
        //         },2000);
        //     });

        });
    });



    
/*
    // Creare una piccola sezione FAQ. 
    // Tante domande che quando cliccate visualizzano la risposta corrispondente.

    $(".question").click(function(){
        // $(this).find("p").toggle(200);
        $(this).children("p").toggle(200);
    });

*/

    /*
    $(".paragrafo").click(function(){
        $(this).hide();
    })
    */

    /*
    var ancorAttr = $("a").attr("href");
    $("a").attr("href", "http://www.yahoo.com");
    console.log("url del link: ",ancorAttr);

    var mioattr = $("a").attr("data-status");
    console.log("il mio atttributo inventato ha vaklore: ", mioattr);
    


    $("#controller").text("testo inserito da metodo");

    var textel = $("#controller").text();

    console.log(textel);
    


    // Creare un bottone che faccia aprire e chiudere un sipario.

    $(".butsipario").click(function(){
        $(".sipario").slideToggle(3000, callbackfunct);
    });

    function callbackfunct(){
        alert("fine animazione");         
    }
*/

    /*
    // Creare il titolo di un paragrafo e un bottone che permette di espandere 
    // il testo inizialmente nascosto

    var elem = $(".accordion");

    // var statoElemento = "chiuso";

        // elem.hide();

        $("#controller").click(function(){
            // elem.show(2000);
            // if(statoElemento === "chiuso"){
            //     elem.addClass("visible");
            //     statoElemento = "aperto";
            // } else {
            //     elem.removeClass("visible");
            //     statoElemento = "chiuso";
            // }
            elem.toggleClass("visible");
            
        });

*/



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