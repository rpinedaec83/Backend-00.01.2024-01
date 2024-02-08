let x = 100 / "Apple";
console.log(x);
let y = -2 / 0;
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

const myChildren = myGirls.concat(myBoys, fruits);
console.log(myChildren)


let d = new Date("1983-08-28");

console.log(d)

d = new Date("1983-08-28T11:00:00");

console.log(d)

let fechaNacimiento = "1983-08-28";
let año = fechaNacimiento.substring(0, 4);
console.log(año)
let mes = fechaNacimiento.substring(5, 7);
console.log(mes)
let dia = fechaNacimiento.substring(8, 10);
console.log(dia)

const date = new Date(fechaNacimiento);
let añod = date.getFullYear();
let mesd = date.getMonth();
let diad = date.getDay();

console.log(añod);
console.log(mesd);
console.log(diad);


console.log(Math.ceil(Math.random() * 100));



let edad = 15;

if (edad >= 18) {
    console.log("Es mayo de edad")
}
else {
    console.log("Es menor de edad")
}

//Calculadora
/*
let numero1 = 0;
let numero2 = 0;
let opcion = 0;

numero1 = parseInt(prompt("Escribe el primer numero"));
numero2 = parseInt(prompt("Escribe el segundo numero"));
opcion = parseInt(prompt("Escribe la operacion: 1 Suma, 2 Resta, 3 Multiplicacion, 4 Division"));

console.log(numero1)
console.log(numero2)
console.log(opcion)

let respuesta = 0;
console.log(respuesta)

/*
if(opcion==1){
    respuesta = numero1+numero2;
}else if(opcion==2){
        respuesta = numero1-numero2;
}else if(opcion==3){
    respuesta = numero1*numero2;
}else if(opcion==4){
    respuesta = numero1/numero2;
}

try {
    switch (opcion) {
        case 1:
            respuesta = numero1 + numero2;
            break;
        case 2:
            respuesta = numero1 - numero2;
            break;
        case 3:
            respuesta = numero1 * numero2;
            break;
        case 4:
            if(isNaN(numero2)){
                alert("No es un numero valido");
            }else{
                respuesta = numero1 / numero2;
                if(!isFinite(respuesta)){
                    throw "Error";
                }
            }
            break;
        default:
            alert("Opcion no valida")
            break;
    }
    
} catch (error) {
    alert("No se puede dividir para 0: "+ error)
}
*/
for (let index = 0; index < 5; index++) {
    console.log(index);
}


for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element)
    
}

for (const key in fruits) {
    const element = fruits[key];
    console.log(element)   
}
let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}


let bandera = false;
do {
    let numero = prompt("Escribe el numero que estoy pensando");
    if(numero==69){
        bandera = false;
    }
  }
  while (bandera);

//console.log(respuesta)


let numeroRecibido = prompt("Escribe un numero")
if(isPar(parseInt(numeroRecibido))){
    console.log("Si es par")
}






function isPar(numVerificar){
    if((numVerificar% 2)== 0){
        return true;
    }
    return false;
}