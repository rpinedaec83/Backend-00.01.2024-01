//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
//La formula que se debe aplicar es:

//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
Proceso ejercicio40

//	Repetir
	Definir pipi, i, j, k , m, n Como Real
	Definir num Como Entero
	Escribir "Ingrese el número de aproximaciones de la serie de Nilakantha"
	Leer num
		
	pipi <- 0
	signo <- 1
	n <- 2
		
	Para i<-1 Hasta num-1 Con Paso 1 Hacer
//		Escribir signo "* 4 / (" n "*(" n + 1 ")*(" n + 2 "))" 
		pipi <- pipi + signo * 4 / (n*(n+1)*(n+2)) 
		n <- n + 2
		signo <- -1 * signo
	FinPara
		
	Escribir "La aproximación del numero pi es: " 3 + pipi
	
FinProceso