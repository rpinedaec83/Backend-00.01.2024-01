Proceso Ejercicio6
	tarifaPorHora = 20.0
    tarifaExtra = 25.0
	    
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horasTrabajadas
	
    
    Si horasTrabajadas <= 40 Entonces
        sueldoBase = horasTrabajadas * tarifaPorHora
    Sino
        sueldoBase = 40 * tarifaPorHora + (horasTrabajadas - 40) * tarifaExtra
    Fin Si
	
   
    Escribir "Sueldo total semanal: $", sueldoBase

FinProceso
