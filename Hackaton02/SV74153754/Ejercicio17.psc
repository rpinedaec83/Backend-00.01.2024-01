Proceso Ejercicio17
	
	Definir hora, min, seg Como Entero
	Escribir "Ingrese la hora:"
	Leer hora
	Mientras hora < 0 o hora > 23
		Escribir "Ingrese un numero entre 0 y 24:"	
	    Leer hora
	FinMientras
	
	Escribir "Ingrese los minutos:"
	Leer min
	Mientras min < 0 o min > 59
		Escribir "Ingrese un numero entre 0 y 59:"
		Leer min
	FinMientras
	
	Escribir "Ingrese los segundos:"
	Leer seg
	Mientras seg< 0 o seg > 59
		Escribir "Ingrese un numero entre 0 y 59:"
		Leer seg
	FinMientras
	
	
	seg= seg + 1
	
	Si seg >= 60 Entonces
		seg = 0
		minuto = minuto + 1
		
		Si min >= 60 Entonces
			min = 0
			hora = hora + 1
			
			Si hora >= 24 Entonces
				hora = 0
			FinSi
		FinSi
	FinSi
	
	Escribir "La hora despues de un segundo es:", hora, ":", min, ":", seg
	
FinProceso