// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato
const randNUm = "https://flynn.boolean.careers/exercises/api/random/int";

var app = new Vue({
  el: '#app',
  data: {
    numbers: []
  },
  mounted: function () {
    for (let i = 0; i < 36; i++) {
      this.numbers.push('');
    }
    //this.faiqualcosa();
  },
  methods: {
    generaNumero: function (indice) {
      axios.get(randNUm)
      .then(risposta => {
        let pushedNum = risposta.data.response;
        //this.numbers[0] = pushedNum;
        this.$set(this.numbers, indice, pushedNum);
        // console.log(pushedNum);
        console.log(this.numbers);
      })

      // axios.get("https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=en-EN&query=casa")
      // .then(risposta => {
      //
      //   console.log(risposta);
      // })
    },
    faiqualcosa: function () {
      alert("ho fatto qualcosa!");
    }

  }

});
