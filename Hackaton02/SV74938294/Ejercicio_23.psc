Proceso Ejercicio_23
	n<-0
	sum<-0
	i<-1
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se sumaran todos los numeros impares hasta -n-"
	Escribir "Ingrese el valor de -n-:"
	Leer n
	Mientras i<=n Hacer
		si (i mod 2)<>0 Entonces
			sum<-sum+i
		FinSi
		i<-i+1
	FinMientras
	Escribir "La suma de todos los impares hasta ",n," es: ",sum
	
FinProceso
