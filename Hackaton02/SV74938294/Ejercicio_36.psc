Proceso Ejercicio_36
	a<-0
	b<-1
	i<-1
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se resolvera la serie de fibonacci"
	Escribir "Ingrese la cantidad de elementos:"
	leer cant
	Mientras i<=cant Hacer
		Escribir a
		c<-a+b
		a<-b
		b<-c
		i<-i+1
	FinMientras
FinProceso
