const arrAutos = ["BMW","AUDI","Mercedes"];
let arrFrutas = new Array("Fresa", "Pera", "Manzana");

console.log(arrAutos[2]);
console.log(arrFrutas[2]);

arrAutos[2]="Ferrari";
arrFrutas[2]="Naranja";

console.log(arrAutos[2]);
console.log(arrFrutas[2]);

arrAutos.push("Jaguar");
console.log(arrAutos);

//arrAutos = 34;

document.getElementById("demo").innerHTML = arrFrutas.join(";");
document.getElementById("demo1").innerHTML = arrAutos.toString();
console.log(arrAutos.length);

let strPalabra = "Una palabra con coma, otra palabra;";
console.log(strPalabra.length)


console.log(arrAutos[arrAutos.length -1]);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo1").innerHTML = text;
text = "<ul>";
arrFrutas.forEach(dibujarUL)
text += "</ul>";


function dibujarUL(value, index){
    text += "<li>" + value + "</li>";
    console.log(index);
};

document.getElementById("demo1").innerHTML = text;


//fruits[6] = "Lemon";

fruits.push("Lemon");

console.log(typeof fruits)


console.log(fruits)

console.log(Array.isArray(fruits));

fruits.pop();


console.log(fruits)

fruits.push("Kiwi");

console.log(fruits)

fruits.shift();

console.log(fruits)

fruits.unshift("Lemon");

console.log(fruits)

delete fruits[0];

console.log(fruits)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren)

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)


fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits)

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    if(element === "Banana"){
        console.log("Lo encontre");
        break;
    }
}

fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("orange") + 1;
console.log(position);

console.log(fruits.includes("Mango"));

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first)

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

console.log(high)


console.log(fruits)
fruits.sort();
console.log(fruits)

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)


const points = [40, 100, 1, 5, 25, 10];
console.log(points)
points.sort(function(a, b){return a - b});
console.log(points)

points.sort(function(a, b){return b - a});
console.log(points)


points.sort(function(){return 0.5 - Math.random()});

console.log(points)

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){return a.year - b.year});

  console.log(cars)

  const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers1)
console.log(numbers2)


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year)