$( document ).ready(function() {

        //Ottengo il numero di giorni di quello specifico mese 
        var datadefinita = moment('01/01/2018', 'DD/MM/YYYY');
        var numeroDiGiorni = datadefinita.daysInMonth();
        // console.log("tipo numero giorni" ,typeof numeroDiGiorni);
        
        
        //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
        for(var i = 1; i <= numeroDiGiorni; i++) {
        
                //Strutturo la data simile alla chiamata ajax
                var currentDate = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
                
                //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
                var currentDay = moment(currentDate).format('DD dddd');
                
                //Inserisco nell'html il mio div con attributo per eventuali selettori e la relativa data formattata
                $('.content').append('<div data-date="'+currentDate+'">'+currentDay+'</div>')
    }
        

        //     interrogiamo la API per farci ritornare le festività del mese

        $.ajax({
                url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
                method: "GET",
                success: function(data){
                        // console.log(data);
                        var arrdata = data.response;
                        console.log(arrdata);

                        for (var i = 0; i < arrdata.length; i++){
                          var oggetto = arrdata[i];

                          var nomefesta = oggetto.name;
                          var datafesta = oggetto.date;

                        //   console.log(nomefesta, datafesta);

                          var elementoSelez = $("div[data-date='" + datafesta + "']");
                          console.log(elementoSelez);

                          if(elementoSelez){
                                elementoSelez.addClass("festa").append(" " + nomefesta);
                          }


                        }

                },
                error: function(){
                        console.log("c'è stato un errarore!");
                }
        }

        )



});






