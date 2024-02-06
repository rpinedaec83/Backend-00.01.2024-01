Proceso Ejercicio_39
	cont <- 0
	Escribir "Ingrese un número"
	Leer n
	Para i desde 0 Hasta n Con Paso 2 Hacer
		cont <- cont + 4 * ((-1)^i) / (2 * i + 1)
	FinPara
	Escribir "Un rango aprox. de PI con ",n," es ",cont,"."
	
FinProceso
