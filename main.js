

var listaSpesa = ["pane", "latte", "uova", "carta Igienica", "birra"];

var itemN, contenutoPrecedente;

for (var i = 0; i < listaSpesa.length; i++) {
  itemN = listaSpesa[i];
  // console.log(itemN);
  contenutoPrecedente = document.getElementById('mio_id').innerHTML;

  console.log("iterazione numero: " + i + contenutoPrecedente);

  document.getElementById('mio_id').innerHTML = contenutoPrecedente + "<li>" + itemN + "</li>";
}


// document.getElementById('mio_id').innerHTML = "<span class='nomeClasse'>Hey sono dentro un tag inserito dinamicamente da js </span>";
