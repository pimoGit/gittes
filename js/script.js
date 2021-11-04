const gridCont = document.getElementById("grid");
const levl = parseInt(prompt("livello?"));
var points = 0;

// const generaElemento = (elementGen, classPlus) => {
//     let node = document.createElement(elementGen);
//     node.classList.add(classPlus);
//     return node
// }

// genero l'array bombe
const bombList = bombGen(16, 1, levl);
// console.log(bombList);

for(let i = 1; i <= 64; i++){

    let newElem = generaElemento("div", "square", i);    

    newElem.addEventListener("click",
        function(){
            // newElem.classList.add("clicked-true");
            console.log(this);
            this.classList.add("clicked-true");

            let numInt = parseInt(this.innerText);

            // se è una bomba agiungo altra classe
            if(bombList.includes(numInt)){
                this.classList.add("boom");
                console.log("BOOOM! FINE GIOCO!!, hai totalizzato punti: ", points);
            } else {
                ++points;
                console.log("BRAVO/A!!! punteggio momentaneo a:", points);
            }
            // console.log(this.innerText);
            // sennò aggiungo punto
        }


        // () => {
        //     // newElem.classList.add("clicked-true");
        //     console.log(this);
        //     this.classList.add("clicked-true");
        // }
    );

    gridCont.appendChild(newElem);
}




// funzioni utili

//  crea elemento del DOM
function generaElemento(elementGen, classPlus, tex) {
    let node = document.createElement(elementGen);
    node.append(tex);
    node.classList.add(classPlus);
    return node
}

// crea array di numeri bomba
function bombGen (bombnum, min, max){
    let arrBombs = [];
    while(arrBombs.length < bombnum){
        let num = getRandomInt(min, max);
        if(!arrBombs.includes(num)){
            arrBombs.push(num);
        }
    }
    return arrBombs

}

// crea numeri random tra min e max
function getRandomInt(min, max) {
    min = Math.ceil(min) || 0;
    max = Math.floor(max) || Number.MAX_SAFE_INTEGER;
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }


