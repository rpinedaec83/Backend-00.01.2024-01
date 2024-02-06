Proceso Ejercicio_37
	num1<-0
	num2<-0
	t<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se conseguira el MCD de cualquier numero, mediante el algoritmo de Euclides"
	Escribir "Ingrese el primer numero:"
	Leer num1
	Escribir "Ingrese el segundo numero:"
    Leer num2
    Si num1<num2 Entonces
        t<-num1
        num1<-num2
        num1<-t
    FinSi
    Mientras num2<>0 Hacer
        resto<-num1 mod num2
        num1<-num2
        num2<-resto
    FinMientras
	
	Escribir "Su MCD es: " num1
	
FinProceso
