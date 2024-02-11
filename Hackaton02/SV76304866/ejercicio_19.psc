//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente 
//forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen 
//al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado 
//que ingresó
Proceso ejercicio_19

    Definir numeroEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, pagoTotal Como Real
	
    Escribir 'Ingrese el número de empleado (56 para Cajero, 64 para Servidor, 80 para Preparador, 48 para Mantenimiento):'
    Leer numeroEmpleado
    Escribir 'Ingrese la cantidad de días trabajados en la semana (máximo 6 días):'
    Leer diasTrabajados
	

    Segun numeroEmpleado Hacer
        56:
            salarioDiario = 56
        64:
            salarioDiario = 64
        80:
            salarioDiario = 80
        48:
            salarioDiario = 48
        Otro:
            Escribir 'Número de empleado no válido.'
    FinSegun

    Si diasTrabajados >= 1 Y diasTrabajados <= 6 Entonces
        pagoTotal = diasTrabajados * salarioDiario
		
        Escribir 'Número de empleado:', numeroEmpleado
        Escribir 'Salario diario: $', salarioDiario
        Escribir 'Días trabajados en la semana:', diasTrabajados
        Escribir 'Pago total al empleado: $', pagoTotal
    Sino
        Escribir 'Ingrese una cantidad válida de días trabajados (entre 1 y 6).'
    FinSi

FinProceso
