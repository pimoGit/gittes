// ALT VERSION...
// EX 3 [PROTOTYPES] Book1 YDKJSY - [middle reeline is the current, the prev is -1 position the next is +1]
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#practicing-prototypes

function randMax(max) {
        return Math.trunc(1E9 * Math.random()) % max;
    }
    
    var reel = {
        symbols: [ "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀" ],
        get maxSymbols(){ return this.symbols.length - 1},
        //maxSymbols: 7,
        spin() {
            if (this.position == null) {
                this.position = randMax(this.maxSymbols);
            }
            this.position = (
                this.position + 100 + randMax(100)
            ) % this.symbols.length;
        },
        display() {
            if (this.position == null) {
                this.position = randMax(this.maxSymbols);
            }
            //return this.symbols[this.position];
            var prevPos = this.position > 0 ? this.position - 1 : this.maxSymbols;
            var nextPos = this.position < this.maxSymbols ? this.position + 1 : 0;
            this.currentSymbol = this.symbols[this.position];
            this.PrevSymbol = this.symbols[prevPos];
            this.NextSymbol = this.symbols[nextPos];
        }
    };
    
    
    
    //testing... 
    /*
    reeLine.spin();
    console.log(reeLine);
    */
    
    // OBJ storing all the data about reelslines
    var reelsObj = {
      statePrev: "",
      stateCurrent: "",
      stateNext: ""
    };
    
    var slotMachine = {
        reels: [
            // this slot machine needs 3 separate reels
            // hint: Object.create(..)
          Object.create(reel), Object.create(reel), Object.create(reel)
        ],
        spin() {
            this.reels.forEach(function spinReel(reel){
                reel.spin();
            });
        },
        display() {
            // TODO
          this.reels.forEach(function spinReel(reel){
              reel.display();
              reelsObj.statePrev += reelsObj.statePrev === "" ? reel.PrevSymbol : "|" + reel.PrevSymbol; 
              reelsObj.stateCurrent += reelsObj.stateCurrent === "" ? reel.currentSymbol : "|" + reel.currentSymbol; 
              reelsObj.stateNext += reelsObj.stateNext === "" ? reel.NextSymbol : "|" + reel.NextSymbol; 
            });
          console.log(`PREV: ${reelsObj.statePrev}`);
          console.log(`CURR: ${reelsObj.stateCurrent}`);
          console.log(`NEXT: ${reelsObj.stateNext}`);

        }
    };
    
    console.log(reel.symbols);// just for easy testing 
    slotMachine.spin();
    slotMachine.display();
    
    
    
    
    
    
    



// $( document ).ready(function() {

//         //Ottengo il numero di giorni di quello specifico mese 
//         var datadefinita = moment('01/01/2018', 'DD/MM/YYYY');

//         //prima chiamata alla funzione per generare primo mese
//         outputMese(datadefinita);

//         // evento richiesta mese successivo
//         $("#next").click(function(){

//                 // prendo riferimento della data atuale da uno dei div che sarà una stringa
//                 var refDataAttuale = $(".content div:first-child").attr("data-date");
//                 console.log("il data-date preso è: ",refDataAttuale);
//                 // vado a creare un oggetto moment/date sulla stringa recuperata
//                 var dataAttuale = moment(refDataAttuale);
//                 console.log("l'oggetto data creato è: ",dataAttuale);

//                 // se il mese della data attuale è dicembre
//                 if(dataAttuale.month() === 11){
//                         alert("mese non disponibile");
//                 } else {
//                         // mi creo la nuova data aggiungendo un mese a quella di ref
//                         var dataNew = dataAttuale.add(1, 'months');
//                         console.log("l'oggetto nuova data creato è: ",dataNew);
//                         // eseguo la mia funzione di output con la data nuova
//                         outputMese(dataNew); 
//                 }    
//         });




//         // evento richiesta mese precedente
//         $("#prev").click(function(){


//                 var refDataAttuale = $(".content div:first-child").attr("data-date");
//                 console.log("il data-date preso è: ",refDataAttuale);
//                 var dataAttuale = moment(refDataAttuale);
//                 console.log("l'oggetto data creato è: ",dataAttuale);

//                 if(dataAttuale.month() === 0){
//                         alert("mese non disponibile");
//                 } else {
//                         var dataNew = dataAttuale.subtract(1, 'months');
//                         console.log("l'oggetto nuova data creato è: ",dataNew);
//                         outputMese(dataNew); 
//                 }    
//         });



//         function outputMese(dataref){

//                 // ripuliamo output nel div content
//                 $(".content").html(" ");

//                 var numeroDiGiorni = dataref.daysInMonth();
//                 // console.log("tipo numero giorni" ,typeof numeroDiGiorni);
                
                
//                 //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
//                 for(var i = 1; i <= numeroDiGiorni; i++) {
                
//                         // mi ricavo il mese attuale dalla data di riferimento
//                         var newMonth = dataref.month()+1;
//                         //Strutturo la data simile alla chiamata ajax
//                         var currentDate = moment('2018-'+ newMonth + '-'+i, 'YYYY-M-D').format('YYYY-MM-DD');
                        
//                         //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
//                         var currentDay = moment(currentDate).format('DD dddd');
                        
//                         //Inserisco nell'html il mio div con attributo per eventuali selettori e la relativa data formattata
//                         $('.content').append('<div data-date="'+currentDate+'">'+currentDay+'</div>')
//         }
                

//                 //     interrogiamo la API per farci ritornare le festività del mese

//                 $.ajax({
//                         url: "https://flynn.boolean.careers/exercises/api/holidays",
//                         method: "GET",
//                         // completiamo la url di chiamata con i parametri passati
//                         data: {
//                                 year: dataref.year(),
//                                 month:   dataref.month() 
//                         },
//                         success: function(data){
//                                 // console.log(data);
//                                 var arrdata = data.response;
//                                 // console.log(arrdata);

//                                 for (var i = 0; i < arrdata.length; i++){
//                                 var oggetto = arrdata[i];

//                                 var nomefesta = oggetto.name;
//                                 var datafesta = oggetto.date;

//                                 //   console.log(nomefesta, datafesta);

//                                 var elementoSelez = $("div[data-date='" + datafesta + "']");
//                                 // console.log(elementoSelez);

//                                 elementoSelez.addClass("festa").append(" " + nomefesta);


//                                 }

//                         },
//                         error: function(){
//                                 console.log("c'è stato un errarore!");
//                         }
//                 }

//                 )

//         }



// });






