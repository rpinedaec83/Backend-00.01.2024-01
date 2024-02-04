//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Proceso ejercicio33
	
	Definir continuar Como Caracter
	
	continuar <- "S"
	
	Escribir "Sesión Iniciada"
	
	Mientras continuar == "S" Hacer
		Escribir "Para continuar presione la tecla [S]"
		Leer continuar
		continuar <- Mayusculas(continuar)
	FinMientras
	
	Escribir "Sesión Terminada"
	
FinProceso
