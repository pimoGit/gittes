

var app = new Vue({
  el: "#app",
  data: {
    number: 0
  },
  mounted: function () {
    //let self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then(risposta => {
       console.log(risposta.data.response);
       this.number = risposta.data.response;
     });
   }
});
