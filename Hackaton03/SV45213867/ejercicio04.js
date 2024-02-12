/*/4.	Hacer un algoritmo en Pseint que lea tres números enteros y los muestree de menor a mayor
Proceso pregunta_04
	Definir num01 Como Entero
	Definir num02 Como Entero
	Definir num03 Como Entero
	Definir temp  Como Entero
	
	Escribir " Ingrese el primer numero entero:"
	Leer num01
	
	Escribir "Ingrese el segundo numero entero:"
	Leer num02
	
	Escribir "Ingrese el tercer numero entero:"
	Leer num03
	
	Si num01 > num02 Entonces
		temp <- num01
		num01 <- num02
		num02 <- temp
	FinSi
	
	Si num02 > num03 Entonces
		temp <- num02
		num02 <- num03
		num03 <- temp
	FinSi
	
	Si num01 > num02 Entonces
		temp <- num01
		num01 <- num02
		num02 <- temp
	FinSi
	
	Escribir "Los numero ordenados de menor a mayor son:", num01, ", " num02, ", " num03
    
console.log("Los números ordenados de menor a mayor son: " + num01 + ", " + num02 + ", " + num03);
FinProceso */
/*
let num01 = parseInt(prompt("Ingrese el primer número entero:"));
let num02 = parseInt(prompt("Ingrese el segundo número entero:"));
let num03 = parseInt(prompt("Ingrese el tercer número entero:"));

// Coloca los números en un array y ordénalos
let numerosOrdenados = [num01, num02, num03].sort((a, b) => a - b);

console.log("Los números ordenados de menor a mayor son: " + numerosOrdenados.join(", ")); */


let num01 = parseInt(prompt("Ingrese el primer número entero:"));
let num02 = parseInt(prompt("Ingrese el segundo número entero:"));
let num03 = parseInt(prompt("Ingrese el tercer número entero:"));
let temp;


if ( num01 > num02 ) {
    temp = num01
	num01 = num02
	num02 = temp
}

if ( num02 > num03 ) {
    temp  = num02
	num02 = num03
	num03 = temp
}

if ( num01 > num02 ) {
    temp = num01
	num01 = num02
	num02 = temp
}

console.log ("Los numero ordenados de menor a mayor son: " + num01 + "," + num02 + "," + num03 );

