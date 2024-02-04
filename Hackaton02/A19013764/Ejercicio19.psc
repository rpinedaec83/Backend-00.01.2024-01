Proceso Ejercicio19
		Definir identificador, diasTrabajados Como Entero
		Definir salarioDiario, salarioTotal Como Real
		
		Escribir "Ingrese el número identificador del empleado (56, 64, 80, 48): "
		Leer identificador
		
		Escribir "Ingrese la cantidad de días trabajados en la semana (1 a 6): "
		Leer diasTrabajados
		
		
		Segun identificador Hacer
			Caso 56:
				salarioDiario <- 56
			Caso 64:
				salarioDiario <- 64
			Caso 80:
				salarioDiario <- 80
			Caso 48:
				salarioDiario <- 48
		

FinSegun

salarioTotal <- salarioDiario * diasTrabajados


Escribir "El salario total a pagar al empleado es: $", salarioTotal


FinProceso
