Proceso Ejercicio_38
	i<-1
	num<-0
	sum<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa sabra si el numero que ingrese es un numero perfecto o no:"
	Escribir "Ingrese un numero:"
	Leer num
	Mientras i<num Hacer
		si (num mod i)=0 Entonces
			sum<-sum+i
		FinSi
		i<-i+1
	FinMientras
	si sum=num Entonces
		Escribir "El numero ",num," es PERFECTO."
	SiNo
		Escribir "El numero ",num," NO es PERFECTO"
	FinSi
	
FinProceso
