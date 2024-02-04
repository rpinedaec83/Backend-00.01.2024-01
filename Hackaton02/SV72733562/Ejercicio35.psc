Proceso sin_titulo
	
	mayor = 0
	menor = 0
	i = 1 
	Escribir "Ingrese la cantidad de numeros" 
	Leer cantidadnumeros 
	Mientras i<=cantidadnumeros Hacer
		Escribir "Ingrese el numero " i " : " 
		leer x
		Si i=1 Entonces
			mayor=x
			menor=x
		SiNo 
			si x>mayor Entonces 
				mayor=x
			FinSi
			
			si(x<menor) Entonces 
				menor=x
			FinSi
		
		FinSi
		i=i+1
	FinMientras
	
	
	Escribir "El numero menor es: " menor 
	Escribir "El numero mayor es: " mayor
	
	
FinProceso
