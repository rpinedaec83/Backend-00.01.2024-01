Proceso Hora_y_segundo
	Definir hora, minuto, segundo Como Entero
	
    Escribir "Ingrese una hora (de 0 a 23): "
    Leer hora
	Escribir "Ingrese los minutos (de o a 59): "
    Leer minuto
	Escribir "Ingrese los segundos (de 0 a 59): "
    Leer segundo
	    
    Si hora >= 0 Y hora <= 23 Y minuto >= 0 Y minuto <= 59 Y segundo >= 0 Y segundo <= 59
		Entonces  segundo = segundo + 1
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
		        
        Escribir "La hora dentro de un segundo será: ", hora, ":", minuto, ":", segundo
    Sino
        Escribir "Ingrese hora de 0 a 23, minutos de 0 a 59 y segundos de 0 a 59 "
    FinSi
FinProceso
