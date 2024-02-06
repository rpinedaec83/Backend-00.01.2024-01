Proceso ejercicio19
    CAJERO = 56
	SERVIDOR =  64
	PREPARADOR  = 80
	MANTENIMIENTO = 48
    Definir empleado, diasTrabajados Como Entero
    Definir salarioTotal Como Real
	
    Escribir "Ingrese el número identificador del empleado (1:Cajero, 2:Servidor, 3:Preparador, 4:Mantenimiento):"
    Leer empleado
	Escribir "Ingrese la cantidad de días que trabajó en la semana (1 a 6 días):"
    Leer diasTrabajados
    Segun empleado Hacer
        Caso 1:
            salarioTotal = CAJERO * diasTrabajados
        Caso 2:
            salarioTotal = SERVIDOR * diasTrabajados
        Caso 3:
            salarioTotal = PREPARADOR * diasTrabajados
        Caso 4:
            salarioTotal = MANTENIMIENTO * diasTrabajados
    FinSegun
    Si empleado >= 1 y empleado <= 4 y diasTrabajados >= 1 y diasTrabajados <= 6 Entonces
        Escribir "El dueño de la heladería debe pagar $", salarioTotal, " al empleado."
	SiNo
		Escribir "ERROR."
    FinSi
FinProceso
