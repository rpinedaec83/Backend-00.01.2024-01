Proceso Ejercicio14
	
	Escribir "Escribe un numero del 1 al 10"
	Leer num
	cont <- 0
	Si num <= 10 y num >= 1 Entonces
		Para i<- 1 Hasta num Hacer
			Si num%i =0 Entonces
				cont<- cont+1
			FinSi
		FinPara
		Si cont=2 Entonces
			Escribir num, "es un numero primo"
		SiNo
			Escribir num, "no es un numero primo"
		FinSi
	FinSi
FinProceso
