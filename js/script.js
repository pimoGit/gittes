/*
icone:
<i class="fas fa-cat" style="color:......"></i>
 <i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
 nome gatto
*/
//abbiamo dei gattini
const cats = [{
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
cats.forEach((item, i) => {
  let contenuto = container.innerHTML;
  console.log(contenuto);
  container.innerHTML = ` ${contenuto}
  <div>
    <i class="fas fa-cat" style="color:${item.color}"></i>
    ${item.name}
  </div>  `
});


//mettiamo un fiocco colorato ad ogni gattino base rosa femmine
//base blue maschi,
//il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
//creaiamo solo dati ma output facciam dopo divisi

//colori base
const pink = '#ff00e6';
const blue = '#0084ff';

//usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
// opacity sarà in base all'age [age*100]
const newCats = cats.map((el) => {
  return {
    ...el,
    ribbon : {
      color: (el.gender === "female" ? pink : blue),
      opacity: (el.age * 100)
    }
  }
});

console.log(newCats);

// dividiamoli per sesso [2 nuovi array con filter]
const MaleCats = newCats.filter((el) => el.gender === "male");
console.log(MaleCats);
const FemaleCats = newCats.filter((el) => el.gender === "female");
console.log(FemaleCats);


// e facciamo output femmine in 'female'
// e invece maschi in 'male'
const femaleContainer = document.getElementById('female');
const maleContainer = document.getElementById('male');

FemaleCats.forEach((item, i) => {
  let contenuto = femaleContainer.innerHTML;
  console.log(contenuto);
  femaleContainer.innerHTML = ` ${contenuto}
  <div>
    <i class="fas fa-cat" style="color:${item.color}"></i>
    <i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>
    ${item.name}
  </div>  `
});

MaleCats.forEach((item, i) => {
  let contenuto = maleContainer.innerHTML;
  console.log(contenuto);
  maleContainer.innerHTML = ` ${contenuto}
  <div>
    <i class="fas fa-cat" style="color:${item.color}"></i>
    <i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>
    ${item.name}
  </div>  `
});


//creiamo una versione [nuovo arr] con prima femmine poi maschi [spread-rest]
const ordCats = [...FemaleCats,...MaleCats];

console.log(ordCats);

// ne facciamo output in 'container-new'
const containerNew = document.getElementById('container-new');

// stampiamo tutti i gattini in fila
ordCats.forEach((item, i) => {
  let contenuto = containerNew.innerHTML;
  console.log(contenuto);
  containerNew.innerHTML = ` ${contenuto}
  <div>
    <i class="fas fa-cat" style="color:${item.color}"></i>
    <i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>
    ${item.name}
  </div>  `
});

//altro array con obj di soli ribbon and name [destructuring in map]

const RibArr  = ordCats.map((el)=> {
  let {ribbon, name} = el;
  return {
    ribbon,
    name
  }
});

console.log(RibArr);
