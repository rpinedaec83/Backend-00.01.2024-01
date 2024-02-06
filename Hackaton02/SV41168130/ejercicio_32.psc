//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades,
//hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

Proceso ejercicio32
    Definir provincia, ciudad Como Entero
    Definir poblacion, poblacionMaxima,maxCiudad,maxProvincia Como Entero
    poblacionMaxima <- 0
	maxCiudad <-0;
	maxProvincia <- 0;
	
	Escribir "Saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades"
	
    Para provincia <- 1 Hasta 3 Hacer
        Para ciudad <- 1 Hasta 11 Hacer
			poblacion <- Aleatorio(500,10000)
            Escribir "La población de la ciudad [", ciudad, "] - provincia [", provincia, "] es: ", poblacion
            Si poblacion > poblacionMaxima Entonces
                poblacionMaxima <- poblacion
				maxCiudad <- ciudad
				maxProvincia <- provincia
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad [" maxCiudad "] - provincia [" maxProvincia "] cuenta con la población con mas personas: " poblacionMaxima
FinProceso
