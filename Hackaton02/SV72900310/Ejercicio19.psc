//19. Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente:
//Cajero (56$/d�a).//Servidor (64$/d�a). //Preparador de mezclas (80$/d�a). //Mantenimiento (48$/d�a).
//El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero identificador del empleado y la cantidad 
//de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�


Proceso Ejercicio19
	
	Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, salarioTotal Como Real
	
		
    Escribir "Ingrese el numero identificador del empleado: Cajero=1 / Servidor=2 / Preparador=3 / Mantenimiento=4"
    Leer idEmpleado
	Mientras idEmpleado < 1 o idEmpleado > 4
		Escribir "Ingrese un numero entre 1 al 4"
		Leer idEmpleado
	FinMientras
	
	
    Escribir "Ingrese la cantidad de dias trabajados en la semana (maximo 6 dias):"
    Leer diasTrabajados
	Mientras diasTrabajados < 1 o diasTrabajados > 6
		Escribir "Ingrese un numero entre 1 al 6 (maximo 6 dias):"
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
