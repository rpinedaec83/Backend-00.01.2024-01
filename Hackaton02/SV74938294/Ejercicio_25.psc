Proceso Ejercicio_25
	i<-0
	num<-0
	fact<-1
	Escribir "------| BIENVENDIO |------"
	Escribir "En este programa se hallara el factorial de cualquier numero pero de ua manera diferente(codigo)"
	Escribir "Ingrese un numero:"
	Leer num
	Mientras num<0 Hacer
		Escribir "EL numero no puede ser menor a cero, ingrese otro numero:"
		Leer num
	FinMientras
	i<-num
	Mientras i<>0 Hacer
		fact<-fact*i
		i<-i-1
	FinMientras
	Escribir "El factorial de ",num," es: ",fact
	
	
FinProceso
