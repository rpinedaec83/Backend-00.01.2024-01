Proceso Ejercicio_26
	coct <- 0
	Escribir "Ingresa un dividendo"
	Leer ddo
	Escribir "Ingresa un divisor"
	Leer dsr
	Mientras ddo >= dsr Hacer
		coct <- coct + 1
		ddo <- ddo - dsr
	FinMientras
	rest <- divo - (divr * coct) 
	Escribir "Resto: ",ddo,"."
	Escribir "Cociente: ",coct,"."
	
FinProceso
