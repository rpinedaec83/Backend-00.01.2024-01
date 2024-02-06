//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

SubProceso pos_mayor <- ObtenerMayor (arreglo,cant)
	Escribir "Ingrese los " cant " números:"
	Para i <- 1 Hasta cant Hacer
		Leer variable
		arreglo[i] <- variable
	FinPara
	
	pos_mayor <- 1
	Para j <- 2 Hasta cant Hacer
		Si arreglo[j]>arreglo[pos_mayor] Entonces
			pos_mayor <- j
		FinSi
	FinPara
Fin SubProceso

Proceso ejercicio12
	
	Definir cant Como Entero
	Definir pos_mayor Como Entero
	Definir variable Como Real
	
	//Indica la cantidad de número a leer
	cant <- 2
	pos_mayor <- 1
	
	Dimension lista[cant]
	pos_mayor <- ObtenerMayor(lista, cant)
	Escribir "El número mayor es " lista[pos_mayor]
	
FinProceso