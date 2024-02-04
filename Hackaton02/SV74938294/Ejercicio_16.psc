Proceso Ejercicio_16
	num<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "Ingrese un numero del 1 al 7, y se le dira a que dia de la semana corresponde"
	Escribir "Ingrese numero:"
	Leer num
	Mientras num<1 o num>7 Hacer
		Escribir "Solohay 7 dias en la semana, escribe un numero dentro de ese rango:"
		Leer num
	FinMientras
	Segun num Hacer
		1:
			Escribir "La fecha es Lunes."
		2:
			Escribir "La fecha es Martes."
		3:
			Escribir "La fecha es Miercoles."
		4:
			Escribir "La fecha es Jueves."
		5:
			Escribir "La fecha es Viernes."
		6:
			Escribir "La fecha es Sabado."
		7:
			Escribir "La fecha es Domingo."
	FinSegun
	
FinProceso
