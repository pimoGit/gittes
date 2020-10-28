
var text;
var fruits = prompt("inserisci un frutto");

switch (fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
   break;
 default:
    text = "I have never heard of that fruit.";
  }

// equivalente di quanto sopra
  // if (fruits === "Banana"){
  //     text = "Banana is good!";
  // } else if (fruits === "Orange") {
  //   text = "I am not a fan of orange.";
  // } else {
  //   text = "I have never heard of that fruit.";
  // }

console.log(text);
