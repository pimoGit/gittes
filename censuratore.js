//SVILUPPATO DA CHIARA


//Il software riceve in input un lungo testo e una serie di parole
//da censurare. Restituisce il testo con xxx al posto delle parole
//censurate. Stampa un “badword index” calcolato come il numero di
//parole censurate su il numero di parole totali

//Funzione che censura le parole
//accetta una stringa per il testo, una stringa di badWord separate da uno spazio, una stringa per la sostituzione
//ritorna un oggetto
function censor(str, bad, replace){

    //rendo il testo e le parole degli array
    var str = str.split(' ');
    //le parole vietate le rendo minuscole
    var bad = bad.toLowerCase().split(' ');
  
    //inizializzo un contatore per tenere il conto delle sostituzioni
    var counter = 0;
  
    //ciclo for per sostituire le parole
    // for (var i = 0; i < str.length; i++) {
    //   //se tra le badWord c'è una parola del testo, controllo rendendole minuscole
    //   if(bad.includes(str[i].toLowerCase())){
    //     //le sostituisco
    //     str[i] = replace;
    //     //mando avanti il contatore
    //     counter++;
    //   }
    // }
  
    //versione con funzione per eliminare la puntegggiatura
    for (var i = 0; i < str.length; i++) {
      //creo un array di caratteri vietati
      var badChar = [',','.',';',':','?','!'];
      //creo una stringa temporanea senza quei caratteri
      var tmpStr = removeChar(str[i], badChar);
  
      //se tra le badWord c'è una parola del testo, controllo rendendole minuscole
      if(bad.includes(tmpStr.toLowerCase())){
        //sostituisco nella parola la parte vietata lasciando la punteggiatura
        str[i] = str[i].replace(tmpStr, replace);
        //mando avanti il contatore
        counter++;
      }
    }
  
    //creo un oggetto da ritornare che contenga la nuova stringa e il contatore
    //possiamo iniziare a far vedere come usare gli oggetti
    var result = {
      'text': str.join(' '),
      'counter': counter
    }
  
    //ritorno  un oggetto che contiene stringa e contatore
    return result;
  }
  
  //funzione accessoria per togliere la punteggiatura da una parola senza usare regex
  //accetta una stringa di testo e un array di caratteri
  function removeChar(str, characters){
      // ciclo per controllare lettera per lettera
      for (var i = 0; i < str.length; i++) {
        //se trovo corrispondenza con l'array di caratteri rimuovo
         if(characters.indexOf(str[i]) > -1){
           str = str.replace(str[i], '');
         }
      }
  
    //ritorno la stringa
    return str;
  }
  
  
  //testo prima con variabili inserite da me
  var text = 'Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  
  var badWord = 'lorem sunt culpa proident';
  
  var strReplace = 'xxx';
  
  //Versione con prompt
  // //chiedo all'utente di inserire un testo
  // var text = prompt('Inserisci il testo');
  //
  // //chiedo all'utente di inserire le parole da censurare
  // var badWord = prompt('Inserisci le parole da censurare');
  
  //Censuro e Stampo
  var censoredString = censor(text, badWord, strReplace);
  console.log('Il testo censurato', censoredString.text);
  console.log('Conteggio parole censurate', censoredString.counter);
  