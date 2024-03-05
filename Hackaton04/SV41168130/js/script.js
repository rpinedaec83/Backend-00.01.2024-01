
// const usuario = {
//   nombre: "Jose Montenegro",
//   edad: 23,
//   universidad: "Universidad nacional de trujillo",
//   carrera: "Ing. Informatica",
//   password: "mfaimdfjf093jf93",
// };

// // console.log(usuario);

// const {nombre, edad, universidad, carrera, password} = usuario;
// console.log(nombre + " " + edad);

// const { password, ...rest } = usuario;
// password = "jf802j3j3d09dj3";
// const newUser = {
//   ...rest,
//   password,
// };
 

// const datos = (...argumentos) => {
//   console.log(argumentos);
// };


// 1. Crea una función que retorne la suma de dos números.  
const suma = (num1, num2) => num1 + num2;
const resultSuma = suma(3,2);
console.log("La suma de los dos números ingresados es: " + resultSuma);

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
const potencia = (base, exponente) => base ** exponente;
const resultPotencia = potencia(2, 3);
console.log("La potencia de los datos ingresados es: " + resultPotencia);
 
// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
const pow_base = 3;
function addPow(...args) {
    let sum = 0;
    for (let arg of args) sum += Math.pow(arg, pow_base);
    return sum;
  }

  let x = addPow(1, 5, 9);
  console.log("La suma de los cubos es: " + x);

// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3
const areaTringulo = (base, altura) => (base * altura) / 2;
const resultTriangulo = areaTringulo(8, 4);
console.log("El área calculada con la base y altura ingresada es: " + resultTriangulo);

// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
// una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje 
// “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

let valor;
function calculator(signo, num1, num2) {
    switch(signo){
        case "+": valor = num1 + num2; break;
        case "-": valor = num1 - num2; break;
        case "/": valor = num1 / num2; break;
        case "x": valor = num1 * num2; break;
        case "%": valor = num1 % num2; break;
        default:  valor = "El parámetro " + signo + " no es reconocido"; break;
    }    
    return valor;
}
console.log("El resultado de la operación es: " + calculator("/", 12, 6));


// PREGUNTAS:

// -  ¿Cómo defines una función?
// Una función de JavaScript se define con la palabra clave function, seguida de un nombre, seguido de paréntesis ().
// https://www.w3schools.com/js/js_functions.asp

// -  ¿Hasta cuantos argumentos puedes declarar en una función?
// Podemos declarar n argumentos.


// MATERIAL ADICIONAL EJERCICIOS HACKATHON

console.log("\nMATERIAL ADICIONAL EJERCICIOS HACKATHON\n");

// 1) Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
// apellido y edad y los retorne en un string concatenado 
// “Hola mi nombre es sebastián yabiku y mi edad 33”
const concatenado = (nombre, apellido, edad) => "Hola mi nombre es " + nombre + " " + apellido + " y mi edad " + edad;
console.log(concatenado("Sebastián", "Yabiku", 33));

// 2) Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const sum_pow_base = 3;
function addPow1(...args) {
    let sum = 0;
    for (let arg of args) sum += Math.pow(arg, sum_pow_base);
    return sum;
  }

  x = addPow1(1, 5, 9);
  console.log("La suma de los cubos es: " + x);

// 3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const getType = (valor) => typeof valor;
console.log("El tipo retornado es: " + getType("esto es un texto"));

// 4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  x = sum(10, 25, 35, -10);
  console.log("La suma de los argumentos es: " + x);

// 5) Crear una función que reciba un array de valores y filtre los valores que no son string
const words = ['texto 1', true, "texto 2", 4, "texto 3", persona = {nombre: "Jorge", apellido: "Palco"}];
const result = words.filter((word) =>  typeof word !== "string");
console.log("Los valores que no son string son: " + result);

// 6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, 
// en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = (matrix) => { 
    let minValue = matrix.reduce((initialValue, currentValue) => Math.min(initialValue, currentValue));
    let maxValue = matrix.reduce((initialValue, currentValue) => Math.max(initialValue, currentValue));    
    return [minValue, maxValue];    
}
const resultMinMax = minMax([1, 2, 3, 4, 5]);
console.log("La matriz ordenada es: " + resultMinMax);

// 7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma 
// de un número de teléfono. formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const formatPhoneNumber = (matrix) => {
  let telefono = "(";
  let parte1 = matrix.filter((currentValue, index, arr) => index <= 2);
  let parte2 = matrix.filter((currentValue, index, arr) => index > 2 && index <=5);
  let parte3 = matrix.filter((currentValue, index, arr) => index > 5 && index <=9);
  telefono += parte1.reduce((total,currentValue) => total += currentValue.toString()) + ") ";
  telefono += parte2.reduce((total,currentValue) => total += currentValue.toString()) + "-";
  telefono += parte3.reduce((total,currentValue) => total += currentValue.toString());
  return telefono;
}

const formatInitial = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log("La cadena en forma de número de teléfono es: " + formatInitial);

// 8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) 
// con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const findLargestNums= (arr1, arr2, arr3) => 


// 10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// const toArray = (objeto) => {
//     // [["a", 1], ["b", 2]]
   
//     const matriz = [];
//     //{ a: 1, b: 2}
//     for (const clave in objeto) {
//       if (objeto.hasOwnProperty(clave)) {
//         matriz.push([clave, objeto[clave]]);
//       }
//     }
   
//     return matriz;
//   };
   
//   const data = { a: 1, b: 2 };
//   const result = toArray(data);
   
//   console.log(Object.entries(data));


// 20) Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las 
// vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};
 
const resultado = "apples and bananas".vreplace('u');