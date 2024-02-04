Proceso Ejercicio_26
	a<-0
	b<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se conseguira el resto y el cociente mediante restas sucesivas"
	Escribir "Ingrese el dividendo:"
	leer a
	Escribir "Ingrese el divisor:"
	Leer b
    c<-0
    Mientras a>=b Hacer
        a<-a-b
        c<-c+1
    FinMientras
    Escribir "El cociente es: ",c
    Escribir "El resto es: ",a
	
FinProceso
