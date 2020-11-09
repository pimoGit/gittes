var palla = {
"prezzo": 12,
"tipo": "pallina da golf",
"colore": ["rosso", "verde"],
"motivoGrafico": {
  "righeOrizzontali": "verdi",
  "rombi": 10
  }
};

console.log(palla.colore);

palla.peso = 14;

for (var key in palla) {
  // console.log(key + ": " + palla[key]);
  console.log(palla[key]);
}
