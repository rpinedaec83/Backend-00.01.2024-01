Proceso ejercicio21
	Definir numero, factorial, x Como Entero
	
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
	si numero < 0 Entonces
		Escribir  "el numero no puede ser negativo"
	SiNo
		x = 1 
		factorial = 1
		Mientras x <= numero Hacer
			factorial = factorial * x
			x = x + 1
		FinMientras
		escribir "el factorial del numero " numero " = " factorial
	FinSi

FinProceso
