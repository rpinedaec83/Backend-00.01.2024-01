Proceso Ejercicio_11
	a<-0
	b<-0
	c<-0
	mayor1<-0
	mayor2<-0
	mayort<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se le dara el mayor de 3 numeros"
	Escribir "Ingrese 3 numeros:"
	Leer a,b,c
	si a>b Entonces
		mayor1<-a
	SiNo
		mayor11<-b
	FinSi
	si a>c Entonces
		mayor2<-a
	SiNo
		mayor2<-c
	FinSi
	si mayor1>mayor2 Entonces
		mayort<-mayor1
	SiNo
		mayort<-mayor2
	FinSi
	Escribir "El mayor de los 3 numeros es: ",mayort
FinProceso
