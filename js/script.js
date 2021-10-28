// stampare lista della spesa da un arr con entrambi i cicli

const spesa = ["uova", "patate", "latte", "burro", "nutella", "sombrero"];
console.log("array iniziale",spesa);
// stampare con una serie di log con il for
// for (let i = 0; i < spesa.length; i++){

//     console.log(spesa[i]);
// }


// prendiamo l'elemento contenitore della generazione di elementi lista
const ulLista = document.getElementById("lista");
// const liLista = document.createElement("li");

let i = 0;
while (i < spesa.length){
    // console.log(spesa[i]);
    // ulLista.innerHTML += `<li>${spesa[i]}</li>`;
    const liLista = document.createElement("li");
    liLista.append(spesa[i]);
    ulLista.append(liLista);
    i++;
}

const btn = document.getElementById("aggiungi");

btn.addEventListener("click",
    function(){
        // l'utente può inserire un elemento nella lista
        const addItem = prompt("aggiungi un elemento");
        spesa.push(addItem);
        console.log("array aggiornata",spesa);
        ulLista.innerHTML += `<li>${addItem}</li>`;
    }
);


