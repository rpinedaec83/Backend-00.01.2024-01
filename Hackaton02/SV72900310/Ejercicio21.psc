//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.


Proceso Ejercicio21
	
	Definir numero, factorial Como Entero
	
    Escribir "Ingrese un numero para calcular su factorial:"
    Leer numero
	
    factorial = 1
	
    Para i = 1 Hasta numero Hacer
        factorial = factorial * i
    FinPara
	
    Escribir "El factorial de ", numero, " es: ", factorial
	
FinProceso
