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
    generaNumero: function () {
      axios.get(randNUm)
      .then(risposta => {
        let pushedNum = risposta.data.response;
        //this.numbers[0] = pushedNum;
        this.$set(this.numbers, 0, pushedNum);
        // console.log(pushedNum);
        console.log(this.numbers);
      })
    },
    faiqualcosa: function () {
      alert("ho fatto qualcosa!");
    }

  }

});
