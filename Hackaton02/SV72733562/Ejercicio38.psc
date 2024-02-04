Proceso sin_titulo
	
	Escribir "Escribe un numero"
	leer num
	
	i=2
	
	suma=0
	
	Mientras i<=num Hacer
		si num%i==0 Entonces
			suma=suma+trunc(num/i)
		FinSi
		i=i+1
	FinMientras
	
	si suma==num Entonces
		Escribir "El numero es perfecto"
	SiNo
		Escribir "El numero no es perfecto"
	FinSi
FinProceso
