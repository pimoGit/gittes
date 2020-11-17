// slider con Vue

var app = new Vue({
  el: "#app",
  data: {
    titleShow: "A",
    names: ['Michele', 'Fabio', 'Roberto']
  },
  methods: {
    toggleVisible: function() {
      if(this.titleShow === "A"){
        this.titleShow = "B";
      } else {
        this.titleShow = "A";
      }
    }
  }
})
