//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.


Proceso Ejercicio26
	
	definir dividendo Como Entero
	definir divisor Como Entero
	definir resta Como Entero
	definir conteo Como Entero
	
	conteo = 0
	
	escribir "Ingrese el dividendo"
	leer dividendo
	escribir "Ingrese el divisor"
	leer divisor
	
	Mientras dividendo - divisor > 0 Hacer
		dividendo = dividendo - divisor 
		conteo = conteo + 1.
	escribir dividendo
	FinMientras
	
	escribir "El cociente es: " conteo " y el resto es " dividendo
	
FinProceso
