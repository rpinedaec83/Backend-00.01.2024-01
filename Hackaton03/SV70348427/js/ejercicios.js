function Ejercicio1() {
    // Obtener el número ingresado por el usuario
    const numero = prompt("Ingrese un numero");

    if (numero > 99 && numero < 1000) {
        alert("El número tiene tres dígitos");
    } else {
        alert("El número NO tiene tres dígitos o no es válido.");
    }
}
function Ejercicio2() {
var numero = prompt("Ingrese un número:");

numero = parseFloat(numero);

if (!isNaN(numero) && numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número no es negativo o no es válido.");
}
}
function Ejercicio3() {
var numero = prompt("Ingrese un número:");

numero = parseFloat(numero);

if (!isNaN(numero) && numero % 10 === 4) {
    alert("El último dígito del número es 4");
} else {
    alert("El número no termina en 4 o no es válido");
}
}

function ordenarNumeros(num1, num2, num3) {
var numeros = [num1, num2, num3];
numeros.sort(function(a, b) {
    return a - b;
});
return numeros;
}

function Ejercicio4() {
var num1 = parseInt(prompt("Ingrese el primer número:"));
var num2 = parseInt(prompt("Ingrese el segundo número:"));
var num3 = parseInt(prompt("Ingrese el tercer número:"));

var numerosOrdenados = ordenarNumeros(num1, num2, num3);

alert("Los números ordenados son: " + numerosOrdenados.join(", "));
}

function Ejercicio5() {
var cantidadZapatos = prompt("Ingrese la cantidad de zapatos:");

cantidadZapatos = parseInt(cantidadZapatos);

if (!isNaN(cantidadZapatos)) {
    var precioPorZapato = 80;

    var precioTotal = cantidadZapatos * precioPorZapato;

    if (cantidadZapatos > 30) {
        precioTotal -= precioTotal * 0.4;
    } else if (cantidadZapatos > 20) {
        precioTotal -= precioTotal * 0.2;
    } else if (cantidadZapatos > 10) {
        precioTotal -= precioTotal * 0.1;
    }

    alert("Precio total con descuento: $" + precioTotal.toFixed(2));
} else {
    alert("Ingrese una cantidad válida de zapatos.");
}
}

function calcularSueldoSemanal(horasTrabajadas) {
const tarifaNormal = 20;
const tarifaExtra = 25;
const horasNormales = 40;

if (horasTrabajadas <= horasNormales) {
    return horasTrabajadas * tarifaNormal;
} else {
    const horasExtras = horasTrabajadas - horasNormales;
    return (horasNormales * tarifaNormal) + (horasExtras * tarifaExtra);
}
}
function Ejercicio6() {

var horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas en la semana:"));
var sueldoSemanal = calcularSueldoSemanal(horasTrabajadas);

alert("El sueldo semanal es: $" + sueldoSemanal);
}

function calcularDescuento(tipoMembresia, totalCompra) {
let descuento = 0;

switch (tipoMembresia.toUpperCase()) {
    case 'A':
        descuento = 0.1;
        break;
    case 'B':
        descuento = 0.15;
        break;
    case 'C':
        descuento = 0.2;
        break;
    default:
        console.log('Tipo de membresía no válido. Se aplicará descuento estándar.');
}

const montoDescuento = totalCompra * descuento;

const totalConDescuento = totalCompra - montoDescuento;

return { montoDescuento, totalConDescuento };
}

function Ejercicio7() {
const tipoMembresiaCliente = 'B';
const totalCompraCliente = 50;

const resultadoDescuento = calcularDescuento(tipoMembresiaCliente, totalCompraCliente);

alert(`Monto de descuento: $${resultadoDescuento.montoDescuento}`);
alert(`Total con descuento: $${resultadoDescuento.totalConDescuento}`);   
}

function calcularPromedioYEstado(nota1, nota2, nota3) {
const notas = [nota1, nota2, nota3];
const totalNotas = notas.length;

const promedio = notas.reduce((sum, nota) => sum + nota, 0) / totalNotas;

const estado = promedio >= 6 ? "Aprobado" : "Reprobado";

return {
    promedio: promedio.toFixed(2),
    estado: estado
};
}

function Ejercicio8(){
var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

var resultado = calcularPromedioYEstado(nota1, nota2, nota3);

alert("El promedio es: " + resultado.promedio);
alert("Estado: " + resultado.estado);
}

function determinarAumento(salarioActual) {
const limiteSalario = 2000;
const porcentajeAumentoMayor = 5;
const porcentajeAumentoMenor = 10;

if (salarioActual > limiteSalario) {
    return salarioActual * (1 + porcentajeAumentoMayor / 100);
} else {
    return salarioActual * (1 + porcentajeAumentoMenor / 100);
}
}

function Ejercicio9(){

var salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

var nuevoSalario = determinarAumento(salarioActual);

alert("El nuevo salario es: $" + nuevoSalario.toFixed(2));
}

function verificarParImpar(numero) {
if (numero % 2 === 0) {
    return "El número es par.";
} else {
    return "El número es impar.";
}
}

function Ejercicio10(){
var numeroIngresado = parseInt(prompt("Ingrese un número:"));

alert(verificarParImpar(numeroIngresado));

}

function encontrarMayor(num1, num2, num3) {
var mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}

return mayor;
}
function Ejercicio11(){
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

var resultado = encontrarMayor(numero1, numero2, numero3);
alert("El número mayor es: " + resultado);
}

function encontrarMayor(num1, num2) {
if (num1 > num2) {
    return num1;
} else if (num2 > num1) {
    return num2;
} else {
    return "Los números son iguales";
}
}

function Ejercicio12(){
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

var resultado = encontrarMayor(numero1, numero2);
alert("El número mayor es: " + resultado);
}

function esVocal(letra) {
letra = letra.toLowerCase();

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return true;
} else {
    return false;
}
}

function Ejercicio13(){
var letraUsuario = prompt("Ingrese una letra:");

if (esVocal(letraUsuario)) {
    alert("La letra ingresada es una vocal.");
} else {
    alert("La letra ingresada no es una vocal.");
}
}

function Ejercicio14(){
let numero, i, contador;

numero = parseInt(prompt("Ingrese un número del 1 al 9:"));

if (numero >= 1 && numero <= 9) {
contador = 0;

for (i = 2; i < numero; i++) {
    if (numero % i === 0) {
        contador++;
    }
}

if (contador === 0) {
    alert("El número es primo.");
} else {
    alert("El número no es primo.");
}
} else {
alert("El número ingresado no está en el rango permitido.");
}

}

function centimetrosAPulgadas(centimetros) {
const pulgadasPorCentimetro = 0.393701;
return centimetros * pulgadasPorCentimetro;
}

function librasAKilogramos(libras) {
const kilogramosPorLibra = 0.453592;
return libras * kilogramosPorLibra;
}

function Ejercicio15(){
const longitudEnCentimetros = 50;
const pesoEnLibras = 150;

const longitudEnPulgadas = centimetrosAPulgadas(longitudEnCentimetros);
const pesoEnKilogramos = librasAKilogramos(pesoEnLibras);

alert(`${longitudEnCentimetros} centímetros son aproximadamente ${longitudEnPulgadas.toFixed(2)} pulgadas.`);
alert(`${pesoEnLibras} libras son aproximadamente ${pesoEnKilogramos.toFixed(2)} kilogramos.`);
}


function Ejercicio16(){
let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7 para indicar el día de la semana:"));

switch (numeroDia) {
case 1:
    alert("Lunes");
    break;
case 2:
    alert("Martes");
    break;
case 3:
    alert("Miércoles");
    break;
case 4:
    alert("Jueves");
    break;
case 5:
    alert("Viernes");
    break;
case 6:
    alert("Sábado");
    break;
case 7:
    alert("Domingo");
    break;
default:
    alert("Número ingresado no válido. Ingrese un número del 1 al 7.");
}

}
function Ejercicio17() {
let hora = parseInt(prompt("Ingrese la hora (formato de 24 horas):"));
let minutos = parseInt(prompt("Ingrese los minutos:"));
let segundos = parseInt(prompt("Ingrese los segundos:"));

if ((hora >= 0 && hora <= 23) && (minutos >= 0 && minutos <= 59) && (segundos >= 0 && segundos <= 59)) {
    segundos = segundos + 1;

    if (segundos === 60) {
        segundos = 0;
        minutos = minutos + 1;

        if (minutos === 60) {
            minutos = 0;
            hora = hora + 1;

            if (hora === 24) {
                hora = 0;
            }
        }
    }

    alert("La hora un segundo después es: " + hora + ":" + minutos + ":" + segundos);
} else {
    alert("Los valores ingresados no son válidos.");
}

}

function Ejercicio18() {
let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
let precioUnitario, precioTotalCliente, gananciaVendedor;

if (cantidadCDs >= 1 && cantidadCDs <= 9) {
    precioUnitario = 10;
} else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
    precioUnitario = 8;
} else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
    precioUnitario = 7;
} else if (cantidadCDs >= 500) {
    precioUnitario = 6;
}

precioTotalCliente = cantidadCDs * precioUnitario;
gananciaVendedor = precioTotalCliente * 0.0825;

alert("Precio unitario por CD: $" + precioUnitario);
alert("Precio total para el cliente: $" + precioTotalCliente);
alert("Ganancia para el vendedor: $" + gananciaVendedor);

}

function Ejercicio19() {
let tipoEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento):"));
let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));
let salarioDiario, pagoTotal;

switch (tipoEmpleado) {
    case 1:
        salarioDiario = 56;
        break;
    case 2:
        salarioDiario = 64;
        break;
    case 3:
        salarioDiario = 80;
        break;
    case 4:
        salarioDiario = 48;
        break;
    default:
        alert("Tipo de empleado no válido.");
        break;
}

if (salarioDiario !== undefined) {
    pagoTotal = salarioDiario * diasTrabajados;
    alert("El pago total al empleado es: $" + pagoTotal);
}

}

function Ejercicio21() {
let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

alert("El factorial de " + numero + " es: " + factorial);

}
function Ejercicio22() {
let n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

alert("La suma de los primeros " + n + " números es: " + suma);

}
function Ejercicio23() {
let n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares hasta ese número:"));
let sumaImpares = 0;

for (let i = 1; i <= n; i += 2) {
    sumaImpares += i;
}

alert("La suma de los números impares hasta " + n + " es: " + sumaImpares);
}
function Ejercicio24() {
let sumaPares = 0;

for (let i = 2; i <= 1000; i += 2) {
    sumaPares += i;
}

alert("La suma de los números pares hasta 1000 es: " + sumaPares);
}

function divisionPorRestasSucesivas(dividendo, divisor) {
let cociente = 0;
let resto = dividendo;

while (resto >= divisor) {
    resto -= divisor;
    cociente++;
}

alert(`Dividendo: ${dividendo}`);
alert(`Divisor: ${divisor}`);
alert(`Cociente: ${cociente}`);
alert(`Resto: ${resto}`);
}

function Ejercicio26() {
const dividendoEjemplo = 17;
const divisorEjemplo = 4;

divisionPorRestasSucesivas(dividendoEjemplo, divisorEjemplo);
}

function Ejercicio27() {
let suma = 0;
let cantidadNumeros = 0;

while (true) {
    let numero = parseFloat(prompt("Ingrese un número positivo (ingrese un número negativo para finalizar):"));

    if (numero < 0 || isNaN(numero)) {
        break;
    }

    suma += numero;
    cantidadNumeros++;
}

if (cantidadNumeros > 0) {
    const media = suma / cantidadNumeros;
    alert("La media de los números ingresados es: " + media);
} else {
    alert("No se ingresaron números positivos.");
}
}

function Ejercicio29() {
let suma = 0;
let contador = 1;

while (contador <= 100) {
    suma += contador;
    contador++;
}

alert("La suma de los primeros cien números es: " + suma);
}
function Ejercicio30() {
let suma = 0;

for (let contador = 1; contador <= 100; contador++) {
    suma += contador;
}
alert("La suma de los primeros cien números es: " + suma);
}
function Ejercicio31() {
let sumaPares = 0;
let sumaImpares = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));

    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    } else {
        sumaImpares += numero;
        contadorImpares++;
    }
}

if (contadorPares > 0) {
    let mediaPares = sumaPares / contadorPares;
    alert("La media de los números pares es: " + mediaPares);
} else {
    alert("No se ingresaron números pares.");
}

if (contadorImpares > 0) {
    let mediaImpares = sumaImpares / contadorImpares;
    alert("La media de los números impares es: " + mediaImpares);
} else {
    alert("No se ingresaron números impares.");
}

}

function Ejercicio33() {
let continuar = true;

while (continuar) {
    let respuesta = prompt("¿Desea continuar? (S/N)").toLowerCase();

    if (respuesta !== 'S') {
        continuar = false;
        alert("Programa finalizado.");
    }
}
}

function imprimirTablaMultiplicar(numero) {
alert(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
}

alert();
}

function Ejercicio34() {
for (let i = 1; i <= 9; i++) {
    imprimirTablaMultiplicar(i);
}
}

// Función para obtener el número mayor y menor de un conjunto de números
function Ejercicio35() {
let numeros = [];

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    numeros.push(numero);
}

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);

alert(`El número mayor es: ${mayor}`);
alert(`El número menor es: ${menor}`);
}

function fibonacci(n) {
let fib = [0, 1];

for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

return fib;
}
function Ejercicio36() {
let limite = parseInt(prompt("Ingrese el número hasta el cual calcular la serie de Fibonacci:"));

if (!isNaN(limite) && limite >= 0) {
    let resultado = fibonacci(limite);

    alert(`Serie de Fibonacci hasta ${limite}: ${resultado.join(', ')}`);
} else {
    alert("Por favor, ingrese un número válido.");
}    
}
function calcularMCD(a, b) {
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
return Math.abs(a);
}

function Ejercicio37() {
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) {
    let mcd = calcularMCD(num1, num2);
    alert(`El M.C.D. de ${num1} y ${num2} es: ${mcd}`);
} else {
    alert("Por favor, ingrese números válidos.");
}
}

function esNumeroPerfecto(numero) {
if (numero <= 1) {
    return false;
}

let sumaDivisores = 1;

for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
}
return sumaDivisores === numero;
}

function Ejercicio38() {
let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));

if (!isNaN(numero) && numero > 0) {
    if (esNumeroPerfecto(numero)) {
        alert(`${numero} es un número perfecto.`);
    } else {
        alert(`${numero} no es un número perfecto.`);
    }
} else {
    alert("Por favor, ingrese un número positivo válido.");
}
}

// Función para calcular la aproximación de pi con la serie de Gregory-Leibniz
function aproximacionPi(iteraciones) {
let piAproximado = 0;

for (let i = 0; i < iteraciones; i++) {
    let termino = 4 / (2 * i + 1);

    if (i % 2 === 0) {
        piAproximado += termino;
    } else {
        piAproximado -= termino;
    }
}

return piAproximado;
}

function Ejercicio39(){
const iteraciones = 100000;

const piAproximado = aproximacionPi(iteraciones);
alert(`Aproximación de pi con ${iteraciones} iteraciones: ${piAproximado}`);
}

function aproximacionPiNilakantha(iteraciones) {
let piAproximado = 3;

for (let i = 0; i < iteraciones; i++) {
    let denominadorInicio = 2 * i + 2;
    let denominadorFin = denominadorInicio + 1;
    let termino = 4 / (denominadorInicio * denominadorFin * (denominadorFin + 1));

    if (i % 2 === 0) {
        piAproximado += termino;
    } else {
        piAproximado -= termino;
    }
}

return piAproximado;
}

function Ejercicio40(){
const iteraciones = 100000;

const piAproximado = aproximacionPiNilakantha(iteraciones);
alert(`Aproximación de pi con ${iteraciones} iteraciones: ${piAproximado}`);

}
