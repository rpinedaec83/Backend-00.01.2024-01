//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.

Proceso ejercicio27
	Definir flag Como Logico
	Definir num Como Entero
	Definir i Como Entero
	Definir cant Como Entero
	
	flag <- Verdadero
	i <- 1
	cant <- 1000
	Dimension lista[cant]
	
	Escribir "Ingrese una lista de números positivos, si desea acabar debe ingresar un número negativo"
	Repetir
		Escribir "Ingrese un número: "
		Leer num
		Si num >= 0 Entonces
			lista[i] <- num
			i <- i+1
		SiNo
			flag <- Falso
		FinSi
	Hasta Que Flag == Falso
	
	Si i > 1 Entonces
		Para j <- 1 Hasta i Hacer
			suma <- suma + lista[j]
		FinPara
		promedio = suma / (i-1)
		Escribir "El promedio es " promedio
	SiNo
		Escribir "El número ingresado es negativo"
	FinSi
	
FinProceso
