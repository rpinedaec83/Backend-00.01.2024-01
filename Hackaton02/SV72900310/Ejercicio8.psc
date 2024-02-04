//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.


Proceso Ejercicio8
	definir nota1, nota2, nota3 Como Entero
	
	Escribir "Ingrese la primera nota:"
    Leer nota1
	
    Escribir "Ingrese la segunda nota:"
    Leer nota2
	
    Escribir "Ingrese la tercera nota:"
    Leer nota3
	
    promedio = (nota1 + nota2 + nota3) / 3
	
    Si promedio > 10.5 Entonces
        Escribir "El estudiante aprobó con un promedio de:", promedio
    Sino
        Escribir "El estudiante no aprobó con un promedio de:", promedio
    FinSi
	
FinProceso
