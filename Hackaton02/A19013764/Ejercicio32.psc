Proceso Ejercicio32
		Definir provincia, ciudad, ciudadConMayorPoblacion Como Caracter
		Definir poblacion, mayorPoblacionTotal Como Entero
		
		mayorPoblacionTotal <- 0
		
		Escribir "Ingrese la población de cada ciudad:"
		
		Para i Desde 1 Hasta 11 Hacer
			Escribir "Ingrese la población de Ciudad ", i, ":"
			Leer poblacion
		FinPara
		
		Si poblacion > mayorPoblacionTotal Entonces
		FinSi
		
				mayorPoblacionTotal <- poblacion
				ciudadConMayorPoblacion <- "Ciudad " + ConvertirATexto(i)
				
				Si i <= 3 Entonces
					provincia <- "Provincia 1"
				Sino Si i <= 6 Entonces
						provincia <- "Provincia 2"
					Sino
						provincia <- "Provincia 3"
					FinSi
				FinSi
		
			
			Escribir "La ciudad con la mayor población es ", ciudadConMayorPoblacion, " en la provincia de ", provincia, " con una población de ", mayorPoblacionTotal

FinProceso
