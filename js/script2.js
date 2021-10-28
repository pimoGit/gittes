const arr = [];

while (arr.length < 10){
    let num = Math.floor(Math.random() * 1000) +1;
    if (!arr.includes(num)){
        arr.push(num);
    }
}

console.log(arr);