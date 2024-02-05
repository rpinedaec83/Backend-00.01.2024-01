Proceso tarea27
	Definir  c Como Entero
	Definir  x,suma Como Real
	x = 1
	Mientras  x >= 0 Hacer
		Escribir "Escribe un numero"
		leer x
		si x>= 0 Entonces
			suma = suma + x
			c = c + 1
		FinSi
	FinMientras
	si c > 0 Entonces
		Escribir "la media de los numeros es: ",suma / c
	FinSi
FinProceso
