//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso ejercicio36
	
	Definir n,a,b,c Como Entero
	
	Escribir "Ingrese la cantidad de números de la serie Fibonacci que desea visualizar"
	Leer n
	
	a <- 0
	b <- 1
	
	Para i<-1 Hasta n Hacer
		Escribir a
		c <- a+b
		a <- b
		b <- c
	FinPara
		
FinProceso
