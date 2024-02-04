Proceso Ejercicio_14
	num<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se le dira si un numero del 1 al 9 es primo o no"
	Leer num
	Mientras num<1 o num>9 Hacer
		Escribir "El numero debe ser del 1 al 9, vuelva a ingresar su numero dentro de ese rango:"
		Leer num
	FinMientras
	si num=4 o num=6 o num=8 o num=9 Entonces
		Escribir "El numero ingresado NO ES PRIMO"
	SiNo
		Escribir "El numero ingresado ES PRIMO"
	FinSi
	
FinProceso
