Algoritmo sin_titulo
	Definir poblacion, maxPoblacion Como Entero
    Definir provinciaMaxPoblacion, ciudadMaxPoblacion Como Cadena
	
    maxPoblacion = 0
	
    Para provincia = 1 Hasta 3
        Para ciudad = 1 Hasta 11
            Escribir "Ingrese la población de la ciudad ", ciudad, " en la provincia ", provincia, ": "
            Leer poblacion
			
            Si poblacion > maxPoblacion Entonces
                maxPoblacion = poblacion
                provinciaMaxPoblacion <- "Provincia " + ConvertirATexto(provincia)
                ciudadMaxPoblacion = "Ciudad " + ConvertirATexto(ciudad)
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con la población más alta es: ", ciudadMaxPoblacion, " en la ", provinciaMaxPoblacion, " con una población de ", maxPoblacion

FinAlgoritmo
