Proceso Ejercicio_14
	Definir x Como Entero
	Para x <- 1 Hasta 10 Con Paso 1 Hacer
		m <- 2
		arr <- Verdadero
		Mientras arr = Verdadero y m < x Hacer
			Si x MOD m = 0 Entonces
				arr <- Falso
			SiNo
				m <- m + 1
			FinSi
		FinMientras
		Si arr = Verdadero y x <> 1 Entonces
			Escribir "El n�mero ",x," es primo."
		SiNo
			Escribir "El n�mero ",x," no es primo."
		FinSi
	FinPara

FinProceso
