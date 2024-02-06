//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso ejercicio16
	Definir numero_de_la_semana Como Entero
	Definir dia Como Caracter
	numero_de_la_semana <- 0
	dia <- ""
	
	Escribir "Ingrese un número para determinar el día de la semana que corresponde:"
	Leer numero_de_la_semana
	numero_de_la_semana <- abs(numero_de_la_semana)
	
	Segun numero_de_la_semana Hacer
		1:
			dia <- "Lunes"
		2:
			dia <- "Martes"
		3:
			dia <- "Miércoles"
		4:
			dia <- "Jueves"
		5:
			dia <- "Viernes"
		6:
			dia <- "Sábado"
		7:
			dia <- "Domingo"
		De Otro Modo:
			dia <- "No válido"
	Fin Segun
	
	Escribir "El número " numero_de_la_semana " equivale al día " dia
	
FinProceso
