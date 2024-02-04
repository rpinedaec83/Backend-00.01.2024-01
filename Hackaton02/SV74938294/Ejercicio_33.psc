Proceso Ejercicio_33
	com<-1
	Escribir "------| BIENVENDIO |------"
	Escribir "En este programa podra continuar hasta donde usted quiera"
	Escribir "RECORDAR:"
	Escribir "1. Continuar"
	Escribir "2. Salir"
	Escribir "Que decide?:"
	Leer com
	Mientras com<>1 y com<>2 Hacer
		Escribir "Disculpe, pero solo hay 2 opciones."
		Escribir "1. Continuar"
		Escribir "2. Salir"
		Escribir "Que decide?:"
		Leer com
	FinMientras
	Mientras com=1 Hacer
		Escribir "Bueno, usted decide"
		Escribir "1. Continuar"
		Escribir "2. Salir"
		Escribir "Que decide?:"
		Leer com
		Mientras com<>1 y com<>2 Hacer
			Escribir "Disculpe, pero solo hay 2 opciones."
			Escribir "1. Continuar"
			Escribir "2. Salir"
			Escribir "Que decide?:"
			Leer com
		FinMientras
	FinMientras
	
	
FinProceso
