//28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.

Proceso ejercicio28
	Definir num Como Entero
	Definir suma Como Entero
	Definir i Como Entero
	
	num <- 100
	suma <- 0
	i <- 1
	
	Repetir
		suma <- suma + i
		i <- i+1
	Hasta Que i > num
	
	Escribir "Hacer un algoritmo para calcular la suma de los primeros " num " numeros"
	Escribir "La Suma de los primeros " num " números es: " suma
	
FinProceso
