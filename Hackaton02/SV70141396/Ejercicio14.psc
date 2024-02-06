// Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Proceso ejercicio14
	Definir num,i, contador Como Entero
	Escribir  " Ingrese el numero "
	Leer num, i, contador
	
	Para num = 1 Hasta 9 Paso 1
		contador = 0
	FinPara
		
	Para i = 1 Hasta num Paso 1
		Si num MOD i = 0 Entonces
			contador = contador + 1
		FinSi
	FinPara
FinPara

FinProceso
