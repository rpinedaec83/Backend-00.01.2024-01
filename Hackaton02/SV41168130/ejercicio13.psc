//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Proceso ejercicio13
	Definir letra Como Caracter
	Escribir "Ingrese una letra"
	Leer letra
	
	letra <- Mayusculas(letra)
	
	Si letra == "A" O letra == "E" O letra == "I" O letra == "O" O letra == "U" Entonces
		Escribir "La letra ingresada es una vocal"
	SiNo
		Escribir "La letra ingresada no es una vocal"
	FinSi
FinProceso
