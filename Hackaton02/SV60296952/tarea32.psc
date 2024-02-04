Proceso tarea32
	definir provincia, ciudad Como Entero
	definir poblacion, poblacionMaxima,maxCiudad,maxProvincia Como Entero
	poblacionMaxima <-0
	maxCiudad <-0;
	maxProvincia <-0;
	para provincia <- 1 hasta 3 Hacer
		para ciudad <- 1 hasta 11 Hacer
			poblacion <- azar(1000)+1
			Escribir "ingrese la poblacion de la ciudad",ciudad," en la provincia",provincia,":", poblacion
			si poblacion > poblacionMaxima Entonces
				poblacionMaxima <- poblacion
				maxCiudad <- ciudad
				maxProvincia <- provincia
				
			FinSi
		FinPara
	FinPara
	Escribir "La ciudad con la poblacion mas alta tiene ",poblacionMaxima," habitantes."
	Escribir "provincia: ",maxProvincia, " ciudad: ",maxCiudad
FinProceso
