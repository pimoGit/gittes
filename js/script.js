// slider con Vue

var app = new Vue({
  el: "#app",
  data: {
    titleShow: false
  },
  methods: {
    toggleVisible: function() {
      if(this.titleShow === true){
        this.titleShow = false;
      } else {
        this.titleShow = true;
      }
    }
  }
})
