var valnome, valkm, valeta;


// input nome utente
var nomeU = document.getElementById('nome');
// input km utente
var kmU = document.getElementById('km');
// input età utente
var etaU = document.getElementById('eta');

// bottoner genera
var generaButton = document.getElementById('genera');


// console.log(nomeU);

// catturo il click sul bottoner
generaButton.addEventListener("click",

  function(){
    // sul click salvo i valori degli input
    valnome = nomeU.value;
    valkm = kmU.value;
    valeta = etaU.value;

    //reciclo codice js per calcolo biglietto altro EX

    // // li stampo in console
    console.log(valnome, valkm, valeta);
  }

);
