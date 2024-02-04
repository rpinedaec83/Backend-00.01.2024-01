Proceso Ejercicio19
	
	Escribir "-------------------- BIENVENIDO A HELADERIA JACOBO - SISTEMA DE PAGOS --------------------"
	
	Escribir "Ingrese el tipo de empleado:"
    Escribir "  1 - Cajero"
    Escribir "  2 - Servidor"
    Escribir "  3 - Preparador de mezclas"
    Escribir "  4 - Mantenimiento"
    Leer id 
	
    
    Si id < 1 o id > 4 Entonces
        Escribir "Ingrese un numero valido" 
    FinSi
	
    
    Escribir("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):")
    Leer diasTrab
	
    
    Si diasTrab < 1 o diasTrab > 6 Entonces
        Escribir "Cantidad de días no válida." 		
    FinSi
	
    
    Segun id Hacer
			1:
				salDiario = 56
				tipoEmpleado = "Cajero"
			2:
				salDiario = 64
				tipoEmpleado = "Servidor"
			3:
				salDiario = 80
				tipoEmpleado = "Preparador de mezclas"
			4:
				salDiario = 48
				tipoEmpleado = "Mantenimiento"
    FinSegun
	
    
    salTotal = diasTrab * salDiario
	
    
    Escribir "El salario total para el empleado de tipo " tipoEmpleado " es: $" salTotal 
	
FinProceso
