//Hacer un algoritmo en Pseint para calcular el promedio de tres notas
//y determinar si el estudiante aprobó o no.
// CONSIDERO QUE LA NOTA PARA APROBAR ES DE 12 
Proceso Ejercicio8
	nota1=0
	nota2=0
	nota3=0
	promedio=0
	Escribir "Ingrese sus notas"
	Leer nota1
	Leer nota2
	Leer nota3
	promedio = redon ((nota1 + nota2 + nota3) / 3)
 	Si promedio >= 12 Entonces
		Escribir  "Aprobado"
		Escribir  "Su nota final es: ",promedio
	sino
		Escribir  "Desaprobado"
		Escribir  "Su nota final es: ",promedio
	FinSi
	
FinProceso
