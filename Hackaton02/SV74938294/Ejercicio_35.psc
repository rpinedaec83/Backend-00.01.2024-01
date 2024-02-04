Proceso Ejercicio_35
	i<-1
	num<-0
	may<-0
	men<-100000000
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se le dara se le dara el mayor y menor de 20 numeros"
	Escribir "Ingrese 20 numeros:"
	Mientras i<=20 Hacer
		Leer num
		si num>may Entonces
			may<-num
		FinSi
		si num<men Entonces
			men<-num
		FinSi
		i<-i+1
	FinMientras
	Escribir "El menor de los 20 numeros es: ",men
	Escribir "El mayor de los 20 numeros es: ",may
	
FinProceso
