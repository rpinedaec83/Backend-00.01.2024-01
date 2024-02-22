const arrAutos = ["BMW","AUDI","Mercedes"];
let arrFrutas = new Array("Fresa","Pera","Manzana");

console.log(arrAutos[2]);
console.log(arrFrutas[2]);

arrAutos[2] = "Ferrari";
arrFrutas[2] = "Naranja";

console.log(arrAutos[2]);
console.log(arrFrutas[2]);

arrAutos.push("Jaguar");
console.log(arrAutos);

document.getElementById("demo").innerHTML = arrFrutas.join("; ");
document.getElementById("demo1").innerHTML = arrAutos.toString();
console.log(arrAutos.length);

let strPalabra = "Una palabra con coma, otra palabra."
console.log(strPalabra.length);

console.log(arrAutos[arrAutos.length - 1]);

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

fruits.push("Lemon")

console.log(fruits)

console.log(typeof fruits)
console.log(fruits)
console.log(Array.isArray(fruits));

fruits.pop();

console.log(fruits);

fruits.push("KiwiMONGUS");

console.log(fruits);

fruits.shift();

console.log(fruits);

fruits.unshift("Lemon AAA");

console.log(fruits);

delete fruits[0];

console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

const myArr = [[1,2],[3,4],[5,6]];

console.log(myArr);

const newArr = myArr.flat();

console.log(newArr);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
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

const numeros = [10, 30, 100, 1, 304, 301, 4];
console.log(numeros);
numeros.sort(function(a, b){return a - b});

console.log(numeros);

numeros.sort(function(a, b){return b - a});
console.log(numeros);

const points = [40, 100, 1, 5, 25, 10];
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

function myFunction(value) {
  return value * 2;
}

console.log(numbers2)