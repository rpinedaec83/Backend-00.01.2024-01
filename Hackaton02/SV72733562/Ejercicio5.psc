Proceso sin_titulo
	
	numerozapatos=0
	preciozapato=80
	definir descuento Como Real
    definir comprafinal Como Real
	
	
	Escribir "Escriba el número de zapatos que desea comprar"
	Leer numerozapatos
	
	comprainicial=numerozapatos*preciozapato;
	
	Si numerozapatos>10 Entonces
		descuento=0.10*comprainicial
		
	Fin Si
	
	Si numerozapatos>20&numerozapatos<30 Entonces
		descuento=0.20*comprainicial
		
	Fin Si
	
	Si numerozapatos>30 Entonces
		descuento=0.40*comprainicial;
	Fin Si
	
	comprafinal= comprainicial-descuento
	Escribir "El precio final es" comprafinal
	
FinProceso
