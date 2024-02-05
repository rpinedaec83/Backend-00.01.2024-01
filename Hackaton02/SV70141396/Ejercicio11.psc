// Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Proceso ejercicio_11
	Definir numero1, numero2, numero3 Como Real
	Escribir " Ingrese el primer numero "
	Leer numero1
	Escribir " Ingrese el segundo numero "
	Leer numero2
	Escribir " Ingrese el tercer numero "
	Leer numero3
	
	Si numero1 > numero2 y numero1 > numero3 Entonces
		Escribir numero1 " es el mayor "
	FinSi
	
	Si numero2 > numero1 y numero2 > numero3 Entonces
		Escribir numero2 " es el mayor"
	FinSi
	
	Si numero3 > numero1 y numero3 > numero2 Entonces
		Escribir numero3 " es el mayor "
	FinSi

FinProceso
