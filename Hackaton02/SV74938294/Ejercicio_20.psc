Proceso Ejercicio_20
	a<-0
	b<-0
	c<-0
	d<-0
	contP<-0
	mayor1<-0
	mayor2<-0
	mayort<-0
	cuadB<-0
	med<-0
	sumt<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se realizaran una serie de condiciones en relacion a los numeros ingresados"
	Escribir "Lo eventos seran:"
	Escribir "-¿Cuántos números son Pares?"
	Escribir "-¿Cuál es el mayor de todos?"
	Escribir "-Si el tercero es par, calcular el cuadrado del segundo."
	Escribir "-Si el primero es menor que el cuarto, calcular la media de los 4 números."
	Escribir "-Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números."
	Escribir "Ingrese 4 numeros ENTEROS:"
	Leer a,b,c,d
	si (a mod 2)=0 Entonces
		contP<-contP+1
	FinSi
	si (b mod 2)=0 Entonces
		contP<-contP+1
	FinSi
	si (c mod 2)=0 Entonces
		contP<-contP+1
	FinSi
	si (d mod 2)=0 Entonces
		contP<-contP+1
	FinSi
	si a<b Entonces
		mayor1<-b
	SiNo
		mayor1<-a
	FinSi
	si c<d Entonces
		mayor2<-d
	SiNo
		mayor2<-c
	FinSi
	si mayor1<mayor2 Entonces
		mayort<-mayor2
	SiNo
		mayort<-mayor1
	FinSi
	Escribir "Existen ",contP," numeros pares."
	Escribir "El mayor de los 4 numeros es: ",mayort
	si	(c mod 2)=0 Entonces
		cuadB<-b*b
		Escribir "Como el tercero es par, se calculara el cuadrado del segundo; que es: ",cuadB
	FinSi
	si a<d Entonces
		med<-(a+b+c+d)/4
		Escribir "Como el primero es menor que el cuarto, la media de los 4 numeros es: ",med
	FinSi
	si b>c Entonces
		si c>=50 y c<=700 Entonces
			sumt<-a+b+c+d
			Escribir "Como se cumplieron las condiciones del ultimo punto, la suma de los 4 numeros es: ",sumt
		FinSi
	FinSi
FinProceso
