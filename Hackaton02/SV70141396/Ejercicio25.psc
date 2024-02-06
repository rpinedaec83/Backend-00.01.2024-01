// Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Proceso ejercicio_25
	Definir num, factorial, i Como Entero
	Escribir " Ingrese un numero entero positivo "
	Leer num
	
	factorial = 1
	i = 1
	
	Mientras i <= num Hacer
		factorial = factorial * i
		i = i + 1
	FinMientras
	Escribir " El factorial de " num " es : " factorial
FinProceso
