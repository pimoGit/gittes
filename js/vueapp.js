var app = new Vue({
    el: '#root',
    data: {
        message: 'Hello World!!!!!!',
        mieClassi: "blue"
      },
    methods: {
        saluta: function () {
            if (this.mieClassi === "red") {
                this.mieClassi = "blue";
            } else {
                this.mieClassi = "red";
            }
            console.log(this.message);
        }
    }
      
   });




