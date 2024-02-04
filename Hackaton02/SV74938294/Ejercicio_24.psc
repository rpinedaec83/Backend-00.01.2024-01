Proceso Ejercicio_24
	i<-1
	sum<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se sumaran todos los numeros pares hasta 1000"
	Mientras i<=1000 Hacer
		si (i mod 2)=0 Entonces
			sum<-sum+i
		FinSi
		i<-i+1
	FinMientras
	Escribir "Y el resultado es: ",sum
	
FinProceso
