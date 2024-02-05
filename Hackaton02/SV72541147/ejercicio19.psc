Proceso ejercicio19
	Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, salarioSemanal Como Real
    
    Escribir "Ingrese el número identificador del empleado (1, 2, 3 o 4):"
    Leer idEmpleado
    
    Escribir "Ingrese la cantidad de días trabajados (1 a 6 días):"
    Leer diasTrabajados
    
    Si idEmpleado >= 1 Y idEmpleado <= 4 Y diasTrabajados >= 1 Y diasTrabajados <= 6 Entonces
        
        Segun idEmpleado Hacer
            1:
                salarioDiario <- 56.0
            2:
                salarioDiario <- 64.0
            3:
                salarioDiario <- 80.0
            4:
                salarioDiario <- 48.0
        FinSegun
        
        salarioSemanal <- salarioDiario * diasTrabajados
        
        Escribir "Número identificador del empleado: ", idEmpleado
        Escribir "Días trabajados en la semana: ", diasTrabajados
        Escribir "Salario diario: $", salarioDiario
        Escribir "Salario semanal: $", salarioSemanal  
    Sino
        Escribir "Número identificador o cantidad de días no válidos."
    FinSi
FinProceso
