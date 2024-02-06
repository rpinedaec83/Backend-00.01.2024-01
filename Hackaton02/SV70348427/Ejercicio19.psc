Proceso CalculoPagoEmpleado
    
	Definir tipoEmpleado, diasTrabajados como Entero
    Definir salarioDiario, pagoTotal como real
	
    Escribir "Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento):"
    Leer tipoEmpleado 
    
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"
    Leer diasTrabajados
	
    Segun tipoEmpleado Hacer
        1:
            salarioDiario = 56
        2:
            salarioDiario = 64
        3:
            salarioDiario = 80
        4:
            salarioDiario = 48
        De Otro Modo:
            Escribir "Tipo de empleado no válido."
            
    FinSegun
	
    pagoTotal = salarioDiario * diasTrabajados
	
    Escribir "El pago total al empleado es: $", pagoTotal
FinProceso
