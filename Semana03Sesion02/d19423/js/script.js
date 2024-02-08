let x = 100 / "Apple";
console.log(x);
let y = -2/0;
console.log(y);

x = 123;
console.log(x);
console.log(x.toString());

x = 9.656;
console.log(x.toFixed(2));

let cars = [
    "Saab", //0
    "Volvo", //1
    "BMW" //2
];

console.log(cars[1]);

console.log(cars);
cars[0] = "Mercedes";
console.log(cars);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())

let size = fruits.length;
console.log(size)

let fruit = fruits.at(2);
console.log(fruit)

console.log(fruits.join(";"));

fruits.push("Kiwi");
console.log(fruits.toString())

fruits.pop();
console.log(fruits.toString())

fruits.shift();
console.log(fruits.toString())

fruits.unshift("Lemon");
console.log(fruits.toString())


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys,fruits);
console.log(myChildren)


let d = new Date("1983-08-28");

console.log(d)

 d = new Date("1983-08-28T11:00:00");

 console.log(d)

 let fechaNacimiento = "1983-08-28";
let año = fechaNacimiento.substring(0,4);
console.log(año)
let mes = fechaNacimiento.substring(5,7);
console.log(mes)
let dia = fechaNacimiento.substring(8,10);
console.log(dia)

const date = new Date(fechaNacimiento);
let añod = date.getFullYear();
let mesd = date.getMonth();
let diad = date.getDay();

console.log(añod);
console.log(mesd);
console.log(diad);


console.log(Math.ceil(Math.random()*100));
