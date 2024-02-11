Proceso Ejercicio_21
	fact<-1
	num<-0
	i<-1
	Escribir "------| BIENVENIDO |------"
	Escribir "Este programa calculara la factorial del numero que ingrese"
	Escribir "Ingrese un numero:"
	Leer num
	Mientras i<=num Hacer
		fact<-fact*i
		i<-i+1
	FinMientras
	Escribir "La factorial de ",num," es: ",fact
	
FinProceso
