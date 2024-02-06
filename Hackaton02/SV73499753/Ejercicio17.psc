//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso Ejercicio17
	h=0
	m=0
	s=0
	
    Escribir "Ingrese la hora (formato de 24 horas):"
    Leer h
	
    Escribir "Ingrese los minutos:"
    Leer m
	
    Escribir "Ingrese los segundos:"
    Leer s
	
     
    Si h >= 0 Y h <= 23 Y m >= 0 Y m <= 59 Y s >= 0 Y s <= 59 Entonces
        
        s = s + 1
		
        
        Si s = 60 Entonces
            s = 0
            m = m + 1
			
            Si m = 60 Entonces
                m = 0
                h = h + 1
				
                Si h = 24 Entonces
                    h = 0
                Fin Si
            Fin Si
        Fin Si
		
        Escribir "La hora después de un segundo es:", h, ":", m, ":", s
	sino
        Escribir "Hora no válida. Las horas deben estar  en el rango de 0 a 23, los minutos y segundos estén en el rango de 0 a 59."
    Fin Si
FinProceso
