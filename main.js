// Al click di un pulsante, deve apparire un alert con un numero random


document.getElementById("mybutton").addEventListener("click",randnum);


function randnum (){
    var num = Math.floor((Math.random() * 100) + 1);
    alert(num);
}



/*
// Ciao Visitatore!
// Imposta il nome di colore rosso in vari modi:
// ● Solo con HTML+CSS
// ● Aggiungendo la classe con JS
// ● Scrivendo su element.style

var el = document.getElementById("messaggio");

// Aggiungendo la classe con JS
// el.className = el.classList + " rosso";

// Scrivendo su element.style
el.style.color = "red";
*/

/*
// Simulare un countdown di 10 secondi che alla fine dice buon anno

var secondi = 10;

var myinterval = setInterval(countdown, 500);


function countdown(){

    secondi = secondi - 1;
    
    if(secondi == 0){
        console.log("Buon Annoooo!!!"); 
        clearInterval(myinterval);
    } else {
        console.log(secondi);
    }

}
*/


/*
// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()

var tempo = parseInt(prompt("quanti secondi mancano alla cottura?"));

setTimeout(pasta, tempo*1000);



 function pasta (){
    alert("la pasta è prontaaaaa!");
}
*/