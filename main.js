$( document ).ready(function() {


    $(".next").click(prossimaslide);

    $(".prev").click(precedenteslide);




    // funzioni
    function prossimaslide(){
            
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav i.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");


        // se siamo all'utima img dello slider, ritorna ad essere attiva la prima
        if(posizioneimg.hasClass("last")){
            $(".slider-wrapper .images  img.first").addClass("active");
            $(".nav i.first").addClass("active");
        } else{
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.next("img").addClass("active");
            posizionenav.next("i").addClass("active");
        }

        
    }


    function precedenteslide(){
            
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav i.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");

        // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
        if(posizioneimg.hasClass("first")){
            $(".slider-wrapper .images  img.last").addClass("active");
            $(".nav i.last").addClass("active");
        } else{
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.prev("img").addClass("active");
            posizionenav.prev("i").addClass("active");
        }

        
    }


});






