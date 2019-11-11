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
        var elmentmsg = $("#template .msgsent").clone();

        console.log(elmentmsg);

        // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
        elmentmsg.find(".testo").text(messaggio);
        
        // appendiamo una copia con testo valorizzato del div "msgsent"
        $("#container").append(elmentmsg);

        // ripuliamo il contenuto dell'input, per UX
        $(".message").val("");


        })

        



});






