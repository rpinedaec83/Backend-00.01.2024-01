Proceso sin_titulo
	
	Escribir "Ingresa un numero" 
	leer num 
	
	si num<5 Entonces 
		Escribir "El numero no se puede calcular" 
	SiNo 
		factorial=1 
		
		para x=1 Hasta num Con Paso 1 Hacer 
			factorial=factorial*x 
			
		FinPara
		
		Escribir "El factorial del numero es" factorial
	
    FinSi
	
FinProceso
