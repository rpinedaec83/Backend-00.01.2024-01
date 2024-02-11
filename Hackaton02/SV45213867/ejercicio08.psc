//8.	Hacer un algoritmo en Pseint para calcular el promedio de
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
		
FinProceso
