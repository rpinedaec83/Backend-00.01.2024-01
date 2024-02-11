Proceso Ejercicio32
    Definir provincia, ciudad Como Entero
	Definir poblacion, poblacionMaxima, maxCiudad, maxProvincia Como Entero
	
	poblacionMaxima <- 0
	maxCiudad <- 0
	maxPovincia <- 0
	Para  provncia <- 1 Hasta 3 Hacer
		Para ciudad <- 1 Hasta 11 Hacer
			poblacion <- azar(1000)+1;
			Escribir "Ingrese la poblacion de la cuidad ", ciudad, " en la provincia ", provincia, ": ", poblacion
			
			Si poblacion > poblacionMaxima Entonces
				poblacionMaxima	<- poblacion
				maxCiudad <- ciudad
				maxProvincia <- provincia
			FinSi
		FinPara
	FinPara
	
    Escribir "La cuidad con la poblacion mas alta tiene ",poblacionMaxima, " habitantes."
	Escribir "Provincia: ",maxProvincia," cuidad: ", maxCiudad
FinProceso
