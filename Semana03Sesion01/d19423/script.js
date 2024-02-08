"use strict";
var dni = 43434343;

console.log(dni);

dni = 23232323;

console.log(dni);
let ce = 123123123
console.log(ce);

ce = 99999999

console.log(ce);

const PI = 3.14159

console.log(PI)


var dni = "hola dni"
console.log(dni);
//PI = 3.1415987;
//console.log(PI);

let ce1 = "Hola ce"

{
    let ce = 123;
}

let nombreApellido = "Roberto Pineda"
let nombre_apellido = "David Lopez"
let NombreApellido = "Juan Perez"

//console.log("Hola desde el archivo js")

console.log(nombreApellido+nombre_apellido)

let esCasado = false;

let arrHobbies = [
    "tocar bajo",
    "aeromodlismo",
    "gunpla"
];

console.log(arrHobbies);


console.log(arrHobbies[1]);


let arrDatos = [
    true,
    "palabra",
    12,
    0.88
];

console.log(arrDatos[3])

let objPersona1 = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad : 40,
    estadoCivil : false
};

console.log(objPersona1.nombre)

let objPersona2 = {
    nombre: "David",
    apellido: "Lopez",
    edad : 30,
    estadoCivil : true
};

let arrPersonas = [objPersona1, objPersona2];


console.log(arrPersonas[1].nombre)


//STRINGS
let palabra1 = "Esta es una palabra";
let palabra2 = 'Esta es una palabra';
let palabra3 = `Esta es una palabra
con 
saltos de 
"linea"`;

console.log(palabra3)

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log(length)

text = "We are the so-called \"Vikings\" from the north.";
console.log(text)

console.log(text[0])

let numero = 5
let frase = "5";


if(numero===frase){
    console.log("Si son iguales")
}
else{

    console.log("NO son iguales")
}

text = "HELLO WORLD";
let char = text.charAt(5);
console.log(char)

const name = "W3Schools";
let letter = name.at(2);
console.log(letter)

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

console.log(part)

let str = "Apple, Banana, Kiwi";
part = str.substring(7, 13);
console.log(part)

let fechaNacimiento = "1983-08-28";
let año = fechaNacimiento.substring(0,4);
console.log(año)
let mes = fechaNacimiento.substring(5,7);
console.log(mes)
let dia = fechaNacimiento.substring(8,10);
console.log(dia)

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2)

text1 = "      Hello World!      ";
 text2 = text1.trim();
 console.log(text2)

text = "5";
let padded = text.padStart(4,"x");
console.log(padded)

"rpixxxxx@xxxx.net"


text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText);

let arrFecha = fechaNacimiento.split("-");
console.log(arrFecha);

text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);