Proceso ejercicio32
	
	Definir provincia, ciudad Como Entero
	Definir poblacion, poblacionMaxima Como Entero
	
	poblacionMaxima = 0
	
	Para provincia = 1 Hasta 3 Hacer
		Para ciudad = 1 Hasta 11 Hacer
			Escribir "Ingrese la poblacion de la ciudad " ciudad " en la provincia " provincia ": "
			Leer poblacion
			
			Si poblacion > poblacionMaxima Entonces
				poblacionMaxima = poblacion
			FinSi
		FinPara
	Fin Para
	
	Escribir "La ciudad con la poblacion mas alta tiene " poblacionMaxima " habitantes."
	
FinProceso

//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias 
//y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)