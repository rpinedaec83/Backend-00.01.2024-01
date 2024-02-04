Proceso Ejercicio17
	Escribir "Ingrese la hora (formato de 24 horas):"
    Leer hora
	
    
    Escribir "Ingrese los minutos:"
    Leer minutos
	
    
    Escribir "Ingrese los segundos:"
    Leer segundos
	
   
    Si hora >= 0 Y hora <= 23 Y minutos >= 0 Y minutos <= 59 Y segundos >= 0 Y segundos <= 59 Entonces
       
        segundos = segundos + 1
		
        Si segundos = 60 Entonces
            segundos = 0
            minutos = minutos + 1
			
            Si minutos = 60 Entonces
                minutos = 0
                hora = hora + 1
				
                Si hora = 24 Entonces
                    hora = 0
                Fin Si
            Fin Si
        Fin Si
		
        
        Escribir "La hora después de un segundo es: ", hora, ":", minutos, ":", segundos
    Sino
        Escribir "Entrada no válida. Verifique los valores ingresados para la hora, minutos y segundos."
    Fin Si


FinProceso
