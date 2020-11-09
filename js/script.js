var palla = {
"prezzo": 12,
"tipo": "pallina da golf",
"colore": ["rosso", "verde"]
};

console.log(palla);

palla.peso = 14;

for (var key in palla) {
  console.log(key + ": " + palla[key]);
}
