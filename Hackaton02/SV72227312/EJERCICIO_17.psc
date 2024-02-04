Proceso  EJERCICIO_17
	Definir hora1, minuto1, segundo1 Como Real
	Definir respuesta Como Caracter
	
    Repetir
		Repetir
			Escribir "Ingrese la hora (0 a 23):"
			Leer hora1
			Si hora1 < 0 O hora1 > 23 O TRUNC(hora1) <> hora1 Entonces
				Escribir "Error. La hora debe estar en el rango (0 a 23) y no puede ser decimal. Intente nuevamente."
			SiNo
				Repetir
					Escribir "Ingrese los minutos:"
					Leer minuto1
					Si minuto1 < 0 O minuto1 > 59 O TRUNC(minuto1) <> minuto1 Entonces
						Escribir "Error. Los minutos deben estar en el rango (0 a 59) y no puede ser decimal. Intente nuevamente."
					SiNo
						Repetir
							Escribir "Ingrese los segundos:"
							Leer segundo1
							Si segundo1 < 0 O segundo1 > 59 O TRUNC(segundo1) <> segundo1 Entonces
								Escribir "Error. Los segundos deben estar en el rango (0 a 59) y no puede ser decimal. Intente nuevamente."
							SiNo
								Escribir "Su hora ingresada es: ",hora1,":",minuto1,":",segundo1
								segundo1 <- segundo1 + 1
								Si segundo1 = 60 Entonces
									segundo1 <- 0
									minuto1 <- minuto1 + 1
									Si minuto1 = 60 Entonces
										minuto1 <- 0
										hora1 <- hora1 + 1
										Si hora1 = 24 Entonces
											hora1 <- 0
										FinSi
									FinSi
								FinSi
								// Mostrar la nueva hora
								Escribir "La hora después de un segundo es:", hora1, ":", minuto1, ":", segundo1
							FinSi
						Hasta Que segundo1 >= 0 Y segundo1 <= 59 y TRUNC(segundo1) = segundo1
					FinSi
				Hasta Que minuto1 >= 0 Y minuto1 <= 59 y TRUNC(minuto1) = minuto1
			FinSi
		Hasta Que hora1 >= 0 Y hora1 <= 23 y TRUNC(hora1) = hora1
		
		Repetir	// Validación de respuesta ingresada
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso