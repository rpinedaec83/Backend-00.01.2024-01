Proceso ejercicio17
		Definir hora, minutos, segundos Como Entero
		Escribir "Ingrese la hora (formato 24 horas):"
		Leer hora
		Escribir "Ingrese los minutos:"
		Leer minutos
		Escribir "Ingrese los segundos:"
		Leer segundos
		Si hora >= 0 y hora <= 23 y minutos >= 0 y minutos <= 59 y segundos >= 0 y segundos <= 59 Entonces
			segundos = segundos + 1
			Si segundos = 60 Entonces
				segundos = 0
				minutos = minutos + 1
				Si minutos = 60 Entonces
					minutos = 0
					hora = hora + 1
					Si hora = 24 Entonces
						hora = 0
					FinSi
				FinSi
			FinSi
			Escribir "La hora un segundo después es:", hora, ":", minutos, ":", segundos
		Sino
			Escribir "ERROR: Formato de tiempo no válido."
		FinSi

FinProceso
