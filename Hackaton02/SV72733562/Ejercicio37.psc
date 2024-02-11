Proceso sin_titulo
	
	Escribir "Escribe el primer numero positivo" 
	Leer num1 
	
	Escribir "Escribe el segundo numero positivo" 
	Leer num2 
	
	Si num2>num1 Entonces 
		auxiliar=num2 
		num2=num1
		num1=Aux
	FinSi
	
	Escribir "El primer numero es: " num1
	Escribir "El segundo numero es: " num2
	residuo = num1%num2
	
	Mientras residuo>0 Hacer 
		Aux=B
		B=residuo
		A=Aux
		residuo= A%B
	FinMientras
	
	Escribir "MCD= " B
	
FinProceso
