// Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso ejercicio_21
	Definir num, factorial, i Como Entero
	Escribir " Ingrese un numero entero positivo "
	Leer num
	
	factorial = 1
	Para i = 1 Hasta num Con Paso 1 Hacer
		factorial = factorial * i
	FinPara
	
	Escribir "El factorial de ", num, " es: ", factorial
	
FinProceso
