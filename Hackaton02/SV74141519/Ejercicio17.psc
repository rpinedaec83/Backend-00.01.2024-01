Proceso Ejercicio17
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE CONVERSION DE HORAS A SEGUNDOS --------------------"
	
	Escribir "Ingrese la hora (formato de 24 horas): " 
    Leer hora 
	
    Escribir "Ingrese los minutos: " 
    Leer min 
	
    Escribir "Ingrese los segundos: " 
    Leer seg 
	
    Si hora >= 0 y hora <= 23 y min >= 0 y minuto <= 59 y seg >= 0 y seg <= 59 Entonces
         
        totalSegundos = (hora * 3600) + (min * 60) + seg
		
        Escribir "La hora ingresada en segundos es: " totalSegundos 
    Sino
        Escribir "Ingrese correctamente los datos." 
    FinSi
	
FinProceso
