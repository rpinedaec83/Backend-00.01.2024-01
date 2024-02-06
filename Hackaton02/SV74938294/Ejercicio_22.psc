Proceso Ejercicio_22
	sum<-0
	n<-0
	i<-1
	Escribir "---| BIENVENIDO |------"
	Escribir "En este programa se hallaran la suma de los n primeros numeros"
	Escribir "Dele un valor a -n-:"
	leer n
	Mientras i<=n Hacer
		sum<-sum+i
		i<-i+1
	FinMientras
	Escribir "La suma de los ",n," primeros numeros es: ", sum
FinProceso
