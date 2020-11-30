 // Gioca contro il PC a chi ha il numero più grande

var app = new Vue({
  el: "#app",
  data: {
    numberUser: 0,
    numberPc: 0
  },
  mounted: function () {
    //let self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then(risposta => {
       this.numberUser = risposta.data.response;
     });

     axios.get('https://flynn.boolean.careers/exercises/api/random/int')
     .then(risposta => {
        this.numberPc = risposta.data.response;
      });
   }
});
