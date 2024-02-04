Proceso sin_titulo
	
	Escribir "Ingrese numero"
	Leer n
	contador=0
	i=0
	
	Mientras i<=n Hacer
		
		si i mod 2 == 1 Entonces
			suma=suma+i;
			contador=contador+1
		FinSi
		i=i+1
	FinMientras
	
	Escribir "La suma de los impares menores o iguales a n es: " suma
	
FinProceso
