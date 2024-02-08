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
console.log(fruits.toString());

let size = fruits.length;
console.log(size);

let fruit = fruits[1];
console.log(fruit);

console.log(fruits.join("*"));

fruits.push("Kiwi");

console.log(fruits[4])

let fruitgone = fruits.pop();

fruits.push("AMONG")

console.log(fruits[4])

fruits.shift();

console.log(fruitgone)

fruits.unshift("Lemon");
console.log(fruits.toString());

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

let random = Math.random();
console.log(random);

let edad = 15;

if (edad >= 18) {
    console.log("Es mayor de edad.")
} else {
    console.log("No es mayor de edad.")
}

//Calculadora

let numero1 =0;
let numero2 =0;
let opcion = 0;

numero1 = parseInt(prompt("Escribe el primer numero:"));
numero2 = parseInt(prompt("Escribe el segundo numero"));
opcion = parseInt(prompt("Escribe la operacion a realizar: 1 SUMA, 2 RESTA, 3 MULT, 4 DIVISION"));

console.log(numero1);
console.log(numero2);
console.log(opcion);

let respuesta = 0;

try {
    console.log(respuesta);

    switch (opcion){
        case 1:
            respuesta = numero1+numero2;
        break;
        case 2:
            respuesta = numero1-numero2;
        break;
        case 3:
            respuesta = numero1-numero2;
        break;
        case 4:
            if(isNaN(numero2)||numero2 ==0){
                alert("No es un numero valido!")
            } else {
            respuesta = numero1/numero2;
            };
        break;
        default:
            alert("Opcion no valida!")
        break;
    };
} catch(error){
    console.log("No se puede dividir entre 0." + error)
};


for (let index = 0; index < 5; index++){
    console.log(fruits[index]);
};

for(const key in fruits){
    const element = fruits[key];
    console.log[element]
};

let i = 0
while (i<10) {
    console.log("The number is " + i + ".");
    i++;
};

let bandera = true;
do {
    let numero = prompt("Escribe el numero que estoy pensando");
    if(numero ==69){
        bandera = false;
    };
} 
while (bandera == true);

//Arrays allow repeating numbers
//Sets don't allow repeating numbers
//Maps allow to save key data inside of specific array values

//console.log("El numero final es " + respuesta + ".");


let numeroRecibido = prompt("Escribe un numero para averiguar si es par.")
//Aca pregunta si isPar es verdadero
if(isPar(parseInt(numeroRecibido))){
    console.log("Si es par!")
} else {
    console.log("No.")
};







function isPar(numVerificar){
    if((numVerificar % 2) == 0){
        return true;
    }
    else return false
};