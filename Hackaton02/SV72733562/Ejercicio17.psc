Proceso Ejercicio17
	
	Definir horas,minutos,segs Como Entero
	Definir valorescorrectos Como Logico
	
	valorescorrectos=verdadero	
	
	Escribir Sin Saltar"Digite la hora (0 a 23)"
	Leer horas
	
	Escribir Sin Saltar"Digite los minutos (0 a 59)"
	Leer minutos
	
	Escribir Sin Saltar"Digite los segundos (0 a 59)"
	Leer segs
	
	Mientras (horas >=0 & horas<=23)
		Mientras (minutos >=0 & minutos<=59)
			Mientras (segs >=0 & segs<=59)
				Limpiar Pantalla
				si(horas>9)
					Escribir Sin Saltar "La hora es: ", horas
				SiNo
					Escribir Sin Saltar "La hora es: 0 ", horas
				FinSi
				
				si(minutos>9)
					Escribir Sin Saltar ":", minutos
				SiNo
					Escribir Sin Saltar ":0", minutos
				FinSi
				
				si(segs>9)
					Escribir Sin Saltar ":", segs
				SiNo
					Escribir Sin Saltar "0", segs
				FinSi
				
				segs = segs + 1;
				Esperar 1 Segundos;
			FinMientras
			
			segs=0
			minutos = minutos +1
			
		FinMientras
		
		minutos=0
		horas=horas+1
		
		si horas = 24
			horas=0
		FinSi
		
	FinMientras
	
	
FinProceso
