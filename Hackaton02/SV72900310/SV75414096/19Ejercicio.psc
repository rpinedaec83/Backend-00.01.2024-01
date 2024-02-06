Algoritmo sin_titulo
	Cajero (56$/día).
	
    Servidor (64$/día).
	
    Preparador de mezclas (80$/día).
	
    Mantenimiento (48$/día).
	
    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	
	Proceso Ejercicio19
		
		Csalario_cajero = 56
		salario_servidor = 64
		salario_preparador = 80
		salario_mantenimiento = 48
		
		Definir id_empleado, dias_trabajados Como Entero
		Definir salario_total Como Real
		
		Escribir "Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento): "
		Leer id_empleado
		
		Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días): "
		Leer dias_trabajados
		
		Si dias_trabajados < 1 O dias_trabajados > 6 Entonces
			Escribir "La cantidad de días trabajados no es válida. Ingrese un valor entre 1 y 6."
		Sino
			Segun id_empleado Hacer
				Caso 1:
					salario_total = salario_cajero * dias_trabajados
				Caso 2:
					salario_total = salario_servidor * dias_trabajados
				Caso 3:
					salario_total = salario_preparador * dias_trabajados
				Caso 4:
					salario_total = salario_mantenimiento * dias_trabajados
					
				De Otro Modo:
					Escribir "Número de empleado no válido. Ingrese un valor entre 1 y 4."
					
			FinSegun
			Escribir "El dueño debe pagar al empleado $", salario_total
    FinSi
FinAlgoritmo
