Algoritmo sin_titulo
	Si hora >= 0 Y hora <= 23 Y minuto >= 0 Y minuto <= 59 Y segundo >= 0 Y segundo <= 59 Entonces
        
		escribir "ingrese la hora (formato 24h"
		leer Hora
		escribir "ingrese los minutos"
		leer minuto
		escribir "ingrese los segundos"
		leer segundo
		
		
		
        segundo = segundo + 1
		
        Si segundo = 60 Entonces
            segundo = 0
            minuto = minuto + 1
			
            Si minuto = 60 Entonces
                minuto = 0
                hora = hora + 1
				
                Si hora = 24 Entonces
                    hora = 0
                FinSi
            FinSi
        FinSi
		
        
        Escribir "La hora un segundo después es: ", hora, ":", minuto, ":", segundo
    Sino
        Escribir "Los valores ingresados no son válidos. Verifique la hora, los minutos y los segundos."
    FinSi
	
FinAlgoritmo
