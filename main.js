var element = document.getElementById("bottone");

var saluto = document.getElementById("saluto");

element.addEventListener("click", randomnum);

function randomnum(){
   var numero = Math.floor(Math.random() * (100+1));
   saluto.innerHTML = numero;
   // alert(numero);
   // if(numero){
      // return numero;
   // }
}

//alert(randomnum());





// var element = document.getElementById("saluto");

// var decisione = prompt("vuoi che il testo sia rosso?");

// if (decisione === "si"){
//    //element.className = "addred";
//    element.style.color = "red";
// }



//var start = 10;


// function countdown (){

//    if(start === 0){
//       alert("Buon ANNOOOO!!! eheheheh!");
//       clearInterval(clock);
//    } else{
   
//    start = start -1;
//    console.log(start);
//    }
// }

// var clock = setInterval(function (){

//    if(start === 0){
//       alert("Buon ANNOOOO!!! eheheheh!");
//       clearInterval(clock);
//    } else{
   
//    start = start -1;
//    console.log(start);
//    }
// }, 1000);











//  var tempocottura = parseInt( prompt("quanti secondi mancano alla cottura della pasta?"));

//  var tempocotturams = tempocottura * 1000;


//  function asyncrona() {
//     //alert('Ou! la pasta è pronta!!!');
//     console.log("hei quando avete finito poi ci sono io!!");
    
//  }



//  setTimeout(asyncrona, 0);

// console.log("istruzione sincrona dopo il timeout");
// console.log("altra istruzione sincrona dopo il timeout");