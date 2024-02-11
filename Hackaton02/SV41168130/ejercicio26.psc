//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Proceso ejercicio26
	Definir numero1 Como Entero
	Definir numero2 Como Entero
	Definir cociente Como Entero
	
	Escribir "Hacer un algoritmo para calcular el resto y cociente por medio de restas sucesivas"
	Escribir "Ingrese el primer número :"
	Leer numero1
	
	Escribir "Ingrese el segundo número :"
	Leer numero2
	
	new_numero <- numero1
	cociente <- 0
	resto <- 0
	
	Mientras new_numero >= numero2  Hacer
		new_numero <- new_numero - numero2
		cociente <- cociente + 1
	FinMientras
	
	Escribir "El cociente es: " cociente
	Escribir "El resto es: " new_numero
	
FinProceso
