const squareCont = document.getElementById("containerSquare");

console.log(squareCont);

for (let i = 0; i <= 1000; i++){
    // console.log("iterazione numero:",i,squareCont.innerHTML);
    // squareCont.innerHTML += `<div class="square">
    // ${i}
    // </div>`;

    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareCont.append(square);
}