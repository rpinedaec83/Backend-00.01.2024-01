Proceso sin_titulo
	
	
	
	respuesta = "si"
		
	Mientras respuesta = "si" Hacer
		Escribir "Diga el numero que quiere para usarlo en la tabla de multiplicar."
		Leer num
		
		x=0
		
		Mientras x<=10 Hacer
			tabla = x * num
			Escribir num, " x ", x , " = " tabla
			x=x+1
		FinMientras
		
		Escribir "Desea seguir? (si | no)"
	    Leer respuesta
		
		
	Fin Mientras

	
	
	
	
FinProceso
