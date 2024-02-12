/*//8.	Hacer un algoritmo en Pseint para calcular el promedio de
//      tres notas y determinar si el estudiante aprobado o no.

Proceso ejercicio_08
		// Variables
		Definir nota1, nota2, nota3, promedio Como Real
		
		// Entrada de datos
		Escribir "Ingrese la primera nota:"
		Leer nota1
		
		Escribir "Ingrese la segunda nota:"
		Leer nota2
		
		Escribir "Ingrese la tercera nota:"
		Leer nota3
		
		// Calcular promedio
		promedio <- (nota1 + nota2 + nota3) / 3
		
		// Determinar si el estudiante ha aprobado
		Si promedio >= 10 Entonces
			Escribir "Promedio:", promedio
			Escribir "¡El estudiante ha aprobado!"
		Sino
			Escribir "Promedio:", promedio
			Escribir "El estudiante no ha aprobado."
		FinSi
		
FinProceso*/

// Variables
let nota1, nota2, nota3, promedio;

// Entrada de datos
nota1 = parseFloat(prompt("Ingrese la primera nota:"));
nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Calcular promedio
promedio = (nota1 + nota2 + nota3) / 3;

// Determinar si el estudiante ha aprobado
if (promedio >= 10) {
    console.log("Promedio:", promedio);
    console.log("¡El estudiante ha aprobado!");
} else {
    console.log("Promedio:", promedio);
    console.log("El estudiante no ha aprobado.");
}
