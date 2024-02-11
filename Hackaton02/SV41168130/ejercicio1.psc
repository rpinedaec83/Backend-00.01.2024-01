// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Proceso ejercicio_1
	Definir numero_1 Como Entero
	numero1 <- 0
	Escribir "Escriba un número"
	Leer  numero1
	
	//Transformamos los valores negativos a positivos
	numero2 = ABS(numero1)
	
	Si numero2 > 99  y numero2 <= 999 Entonces
		Escribir "El número " numero1 " tiene 3 digitos"
	SiNo
		Escribir "El numero " numero1 " no tiene 3 digitos"
	FinSi
	
FinProceso