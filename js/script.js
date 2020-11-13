/*
icone:
<i class="fas fa-cat" style="color:......"></i>
 <i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
 nome gatto
*/

//abbiamo dei gattini
const cats = [
  {
    name: 'Adam',
    age: 0.3,
    color: '#00ffff',
    gender: 'male'
  },
  {
    name: 'Emily',
    age: 0.8,
    color: '#f700ff',
    gender: 'female'
  },
  {
    name: 'Willoby',
    age: 1.3,
    color: '#ff6600',
    gender: 'male'
  },
  {
    name: 'Poppy',
    age : 0.2,
    color: '#00ff00',
    gender: 'female'
  },
];

// console.log(cats);
const container = document.getElementById('container');

// stampiamo tutti i gattini in fila nel 'container' [forEach + Tlit]
cats.forEach((element) => {
  let contenuto = container.innerHTML;

  //console.log(contenuto);

  container.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      ${element.name}
    </div>
  `
});



//mettiamo un fiocco colorato ad ogni gattino,
//base rosa femmine
//base blue maschi,
//il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
//creaiamo solo dati ma output facciam dopo divisi
//colori base
const pink = '#ff00e6';
const blue = '#0084ff';
//usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
// opacity sarà in base all'age [age*100]
var ribbonCats = cats.map((element) =>{
  return {
    ...element,
    ribbon: {
      color: (element.gender === "female" ? pink  :  blue), // if (element.gender === "female") { pink } else { blue }
      opacity: (element.age * 100)
    }
  }
});

console.log(cats, ribbonCats);






// dividiamoli per sesso [2 nuovi array con filter]
const femaleCats = ribbonCats.filter((element) => element.gender === "female" );
console.log(femaleCats);
const maleCats = ribbonCats.filter((element) => element.gender === "male" );
console.log(maleCats);


// e facciamo output femmine in 'female'
// e invece maschi in 'male'
const femaleContainer = document.getElementById('female');
const maleContainer = document.getElementById('male');

femaleCats.forEach((element) => {
  let contenuto = femaleContainer.innerHTML;

  femaleContainer.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
  `
});




//creiamo una versione [nuovo arr] con prima femmine poi maschi [spread-rest]




// ne facciamo output in 'container-new'
const containerNew = document.getElementById('container-new');
// stampiamo tutti i gattini in fila




//altro array con obj di soli ribbon and name [destructuring in map]
