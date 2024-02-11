// Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Proceso ejercicio_26
	Definir dividendo, divisor, cociente, resto Como Entero
	Escribir " Ingrese el dividendo ( entero positivo ) "
	Leer dividendo
	Escribir " Ingrese el divisor ( entero positivo ) "
	Leer divisor
	
	cociente = 0
	resto = dividendo
	
	Mientras resto >= divisor Hacer
		resto = resto - divisor
		cociente = cociente + 1
	FinMientras
	
	Escribir "El cociente es: ", cociente
	Escribir "El resto es: ", resto
	
FinProceso
