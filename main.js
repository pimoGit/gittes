$( document ).ready(function() {

        var elemento = $("#numrandom");

        $("#butn").click(function () {
                // var mioele = $(this);
                $.ajax({
                        url: "https://flynn.boolean.careers/exercises/api/random/word ",
                        method: "GET",
                        success: function (datiritorno){
                                alert("hey è andata tutto bene!")
                                console.log(datiritorno);
                                elemento.html(datiritorno.response);
                                
                        },
                        error: function (richiesta, stato){
                                console.log("c'è stato un errore: " + stato);
                                
                        }

                });

});
        


});






