Proceso Pregunta_19
	
	definir identificador, diasTrabajados como Entero
	definir salarioDiario como Real
    definir salario Como Real
    escribir "Ingrese el número identificador del empleado: "
    leer identificador
    
    Escribir "Ingrese la cantidad de días trabajados en la semana : "
    leer diasTrabajados

    Si diasTrabajados >= 1 Y diasTrabajados <= 6 Entonces
		
        Segun identificador Hacer
            1: 
				salarioDiario = 56
            2: 
				salarioDiario = 64
            3: 
				salarioDiario = 80
            4: 
				salarioDiario = 48
            De Otro Modo: 
				Escribir "Número identificador de empleado no válido"
        FinSegun
        

	
        salario = salarioDiario * diasTrabajados
      
        escribir "El salario a pagar al empleado es: $", salario
    Sino
        escribir "La cantidad de dias maximo de trabajo es de 6 "
    FinSi
FinProceso
