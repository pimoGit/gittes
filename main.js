$( document ).ready(function() {

        //agganciamo al click sul bottone la funzione di callbnack
        $(".sendmsg").click(function(){

        //ci salviamo il valore dell'input inserito dall'utente
        var messaggio = $(".message").val();
        // console.log(messaggio);

        // $("#container").append(
        //         "<div class='msgsent'>" + messaggio +"</div>"
        // );
        
        // cloniamo (facciamo una copia) del div con classe "msgsent" che sta dentro
        // un div con ID "template"
        // var elmentmsg = $("#template .msgsent").clone();
        // console.log(elmentmsg);

        // var source   = document.getElementById("hb-template").innerHTML;
        var sorgente   = $("#hb-template").html();
        console.log(sorgente);

        var sorgDigerita = Handlebars.compile(sorgente);



        // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
        // elmentmsg.find(".testo").text(messaggio);
        

        var objRef = {text: messaggio, orario: "10:15", classname: "msgsent"};

        var elValorizzato    = sorgDigerita(objRef);

        
        // appendiamo una copia con testo valorizzato del div "msgsent"
        // $("#container").append(elmentmsg);
        $("#container").append(elValorizzato);

        // ripuliamo il contenuto dell'input, per UX
        $(".message").val("");


        });

        



});






