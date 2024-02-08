let x = 100 / "Apple";
console.log(x)
//resultado NaN (Not a Number)
let y = -2/0;
console.log(y)
//resultado -Infinity

x = 123;
console.log(x);
console.log(x.toString());

x = 9.656;
console.log(x.toFixed(0));
//redondear a 0 decimales

x = 9.656;
console.log(x.toFixed(2));
//redondear a 2 decimales

let cars = [
    "Saab", //0
    "Volvo", //1
    "BMW" //2
];

console.log(cars[1]);

console.log(cars);
cars[0] = "Mercedes";
console.log(cars);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

let size = fruits.length;
console.log(size);

let fruit = fruits[1];
console.log(fruit);

console.log(fruits.join("*"));

fruits.push("Kiwi");

let fruitgone = fruits.pop();

fruits.shift();

console.log(fruitgone)

fruits.unshift("Lemon");
console.logs(fruits.toString());

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

let d = new Date();

let d2 = new Date("2022-03-25");

console.log(d2);

 d2 = new Date("1983-08-28T11:00:00");

 console.log(d2);

let fechaNacimiento = "1983-08-28";
let año = fechaNacimiento.substring(0,4);
console.log(año);
let mes = fechaNacimiento.substring(5,7);
console.log(mes)
let dia = fechaNacimiento.substring(8,19);
console.log(dia);

const date = new Date(fechaNacimiento);
let añod = date.getFullYear();
let mesd = date.getMonth();
let diad = date.getUTCDay();

console.log(añod);
console.log(mesd);
console.log(diad);



