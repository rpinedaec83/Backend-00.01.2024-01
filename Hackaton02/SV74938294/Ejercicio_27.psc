Proceso Ejercicio_27
	sum<-0
	num<-0
	i<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se hallara la media de todos los numeros que ingrese hasta que ingrese un negativo"
	Mientras num>=0 Hacer
		Escribir "Ingrese un numero:"
		Leer num
		si num>=0 Entonces
			sum<-sum+num
			i<-i+1
		FinSi
	FinMientras
	med<-sum/i
	Escribir "La media de los ",i," numeros es: ", med
	
FinProceso
