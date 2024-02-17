
//ejercico 01

function SumaDosNumeros() {

let numero1 = parseInt(prompt("Escriba el primer numero a Sumar :) "));
let numero2 = parseInt(prompt("Escriba el segundo numero a Sumar :) "));
const suma = numero1 + numero2;

console.log("El resultado es", suma);
}

function Ejercicio02(){

let numero_base = parseInt(prompt("Ingrese el numero"));

let exponente = parseInt(prompt("Ingrese el exponente"));

let resultado = numero_base ** exponente;

alert("El resultado es " + resultado);          //Resultado en Pantalla 
console.log("El resultado es: " + resultado);   //Resultado en CONSOLA

}


function Ejercicio03() {

    const exponente = 3;
    let numero01 = parseInt(prompt("Ingresa el primer numero"));
    let numero02 = parseInt(prompt("Ingresa el segundo numero"));
    let numero03 = parseInt(prompt("Ingresa el tercer numero"));

primerResultado = numero01 ** exponente 
segundoResultado = numero02 ** exponente
tercerResultado = numero03 ** exponente

resultadoFinal = primerResultado + segundoResultado + tercerResultado 

alert("La suma de sus cubos es " + resultadoFinal);
console.log("La suma de sus cubos es " + resultadoFinal);

}

function Ejercicio04() {

const areDelTriangulo = 2;
let base = parseInt(prompt("Ingresa la base del triangulo"));
let altura = parseInt(prompt("Ingresa la altura del triangulo"));

CalcularArea = (base * altura) / areDelTriangulo

alert("El area del triangulo es " + CalcularArea);
console.log("El area del triangulo es " + CalcularArea)
}

function Calculator() {

let operacion = parseInt(prompt("Elija una operacion: (1) SUMA, (2) RESTA, (3) MULTIPLICACION"));
if (operacion == 1) {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 + numero2;
    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);

}
else if (operacion == 2) {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 - numero2;
    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);
}
else if (operacion == 3) {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 * numero2;
    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);

}
else 
    {
        alert("Operacion no valida");
    }

};

function preguntas() {

alert("¿Como defines una function? --> Una funcion se define, usando la palabra clave: function o sino escribir const nombre () => {}");

}
function preguntas01() {
    alert("¿Hasta cuantos argumentos puedes declarar en una función?--> una funcion no tiene limite para poseer argumentos");

}
function ejercicioR1() {

   const usuario = {
    nombre: prompt("Ingresa el nombre"),
    apellido: prompt("Ingresa el apellido"),
    edad: prompt("Ingresa la edad")
   }

   alert("Hola mi nombre es " + usuario.nombre + " " + usuario.apellido + " y tengo  " + usuario.edad + " años de edad");
   console.log("Hola mi nombre es " + usuario.nombre + " " + usuario.apellido + " y tengo  " + usuario.edad + " años de edad");
    }

    function EjercicioR2() {

        const exponente = 3;
        let numero01 = parseInt(prompt("Ingresa el primer numero"));
        let numero02 = parseInt(prompt("Ingresa el segundo numero"));
        let numero03 = parseInt(prompt("Ingresa el tercer numero"));
    
    primerResultado = numero01 ** exponente 
    segundoResultado = numero02 ** exponente
    tercerResultado = numero03 ** exponente
    
    resultadoFinal = primerResultado + segundoResultado + tercerResultado 
    
    alert("La suma de sus cubos es " + resultadoFinal);
    console.log("La suma de sus cubos es " + resultadoFinal);
    }

    function EjercicioR3 (){
   
let userInput = prompt("Por favor, ingresa un dato:");


if (!isNaN(userInput)) {
  
    userInput = parseFloat(userInput);
}

console.log("El dato ingresado es:", typeof userInput);

}

function EjercicioR4(...numeros) {

    return( numeros.reduce((total, num) => total + num, 0))
    
}
console.log(EjercicioR4(1, 2, 3)); 
console.log(EjercicioR4(10, 20, 30, 40)); 
console.log(EjercicioR4(2, 4, 6, 8, 10)); 
console.log(EjercicioR4(5, 5, 5, 5))
console.log("Escrito desde la consola")