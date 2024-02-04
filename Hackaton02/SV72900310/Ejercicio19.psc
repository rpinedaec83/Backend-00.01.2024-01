//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).//Servidor (64$/día). //Preparador de mezclas (80$/día). //Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad 
//de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó


Proceso Ejercicio19
	
	Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, salarioTotal Como Real
	
		
    Escribir "Ingrese el número identificador del empleado: Cajero=1 / Servidor=2 / Preparador=3 / Mantenimiento=4"
    Leer idEmpleado
	Mientras idEmpleado < 1 o idEmpleado > 4
		Escribir "Ingrese un numero entre 1 al 4"
		Leer idEmpleado
	FinMientras
	
	
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"
    Leer diasTrabajados
	Mientras diasTrabajados < 1 o diasTrabajados > 6
		Escribir "Ingrese un numero entre 1 al 6 (máximo 6 días):"
		Leer diasTrabajados
	FinMientras
	
	Segun idEmpleado Hacer
		1: salarioDiario = 56
		2: salarioDiario = 64
		3: salarioDiario = 80
		4: salarioDiario = 48
			
	FinSegun

	salarioTotal = salarioDiario * diasTrabajados

	Escribir "El salario total a pagar al empleado es:", salarioTotal
		
FinProceso
