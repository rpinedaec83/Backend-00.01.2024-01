//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.


Proceso Ejercicio25
	Definir numero, factorial,i Como Entero
	
    Escribir "Ingrese un numero para calcular su factorial:"
    Leer numero
	i=1
	factorial=1
	
	repetir
		factorial= i*factorial
		i=i+1		
	Hasta Que i=numero+1
	
	Escribir "El factorial de " numero " es igual a " factorial
	
FinProceso
