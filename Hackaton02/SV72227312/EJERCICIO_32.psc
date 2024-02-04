// Se asignó automáticamente al azar cantidades de población a ciudades hipotéticas 

Proceso EJERCICIO_32
    Definir provincia, ciudad Como Entero
    Definir poblacion, poblacionMaxima,maxCiudad,maxProvincia Como Entero
    poblacionMaxima <- 0
	maxCiudad <-0;
	maxProvincia <- 0;
    Para provincia <- 1 Hasta 3 Hacer
        Para ciudad <- 1 Hasta 11 Hacer
				poblacion <- azar(100000)+1;
            Escribir "Población de la ciudad ", ciudad, " en la provincia ", provincia, ": ", poblacion
            Si poblacion > poblacionMaxima Entonces
                poblacionMaxima <- poblacion
				maxCiudad <- ciudad
				maxProvincia <- provincia
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con la población más alta tiene ", poblacionMaxima, " habitantes."
	Escribir  "Provincia: ",maxProvincia," ciudad: ",maxCiudad
FinProceso