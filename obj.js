// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  "nome": "Mario",
  "cognome": "DeMariis",
  "eta": 18
};

for (var nomeChiave in studente){
  console.log(nomeChiave + " " + studente[nomeChiave]);
}

var studenti = [
  {
    "nome": "Luca",
    "cognome": "Marini",
    "eta": 20
  },
  {
    "nome": "Filippo",
    "cognome": "Giangiacomi",
    "eta": 22
  },
  {
    "nome": "Flavio",
    "cognome": "Rimaldo",
    "eta": 24
  }
];

var nomeStudente = prompt("inserisci nome");
var cognomeStudente = prompt("inserisci cognome");
var etaStudente = parseInt(prompt("inserisci eta"));


studenti.push({
  "nome": nomeStudente,
  "cognome": cognomeStudente,
  "eta": etaStudente
});
// console.log("l'array completo è: ", studenti);

// console.log("elemnto 1 dell'array", studenti[2] );


for (var i = 0; i < studenti.length; i++){
  var oggettoI = studenti[i];
  // console.log("valore N su iterazione num" + i + "è oggetto: ", oggettoI);
  var nomeStudente = oggettoI.nome;
  var cognomeStudente = oggettoI.cognome;
  console.log(nomeStudente + " " + cognomeStudente);
  // for (var key in oggettoI){
  //   console.log(key + " " + oggettoI[key]);
  // }
}




// var studenti = [
//   [{
//     "nome": "Luca",
//     "cognome": "Marini",
//     "eta": 20
//   },
//   {
//     "nome": "Filippo",
//     "cognome": "Giangiacomi",
//     "eta": 22
//   }],
//   ["{
//     "nome": "Luca",
//     "cognome": "Marini",
//     "eta": 20
//   }",
//   {
//     "nome": "Filippo",
//     "cognome": "Giangiacomi",
//     "eta": 22
//   }]
// ];
//
// console.log(studenti[0][1]);
