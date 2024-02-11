Proceso Ejercicio_15
	Escribir "Ingrese un tipo de conversión:"
	Escribir "-> A: centímetros a pulgadas."
	Escribir "-> B: libras a kilogramos."
	Leer type
	Escribir "Ingrese un número a convertir"
	Leer num
	Segun type Hacer
		"A":
			in = num / 2.54
			Escribir "Conversión de ",num,"cm a in: ",in,"in."
		"B":
			kg = num / 2.205
			Escribir "Conversión de ",num,"lb a kg: ",kg,"kg."
		De Otro Modo:
			Escribir "No es un tipo de conversión."
	Fin Segun

FinProceso
