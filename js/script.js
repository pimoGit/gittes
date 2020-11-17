// slider con Vue

var app = new Vue({
  el: "#app",
  data: {
    titleShow: "A"
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
