// slider con Vue

var app = new Vue({
  el: "#app",
  data: {
    fotoIndex: 0,
    foto: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg"
    ]
  },
   methods: {
     nextFoto: function () {
       this.fotoIndex = this.fotoIndex + 1;

       if(this.fotoIndex > (this.foto.length - 1)){
         this.fotoIndex = 0;
       }
       console.log(this.fotoIndex);
     }
  }
})
