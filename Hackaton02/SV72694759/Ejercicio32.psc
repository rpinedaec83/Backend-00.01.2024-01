Proceso Ejercicio32
	
    Definir poblacion, maxPoblacion Como Entero
	
    maxPoblacion <- 0
    ciudadConMayorPoblacion <- ""
	
    Para i <- 1 Hasta 3 Hacer
        Escribir "Provincia ", i
        Para j <- 1 Hasta 11 Hacer
            Escribir "Ingrese la población de la ciudad ", j, " en la provincia ", i, ": "
            Leer poblacion
			
            Si poblacion > maxPoblacion Entonces
                maxPoblacion <- poblacion
                ciudadConMayorPoblacion <- "Ciudad " + ConvertirATexto(j) + " en la provincia " + ConvertirATexto(i)
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con la población más grande es: ", ciudadConMayorPoblacion
FinProceso