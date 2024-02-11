Proceso Ejercicio9
	Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
	
    Si salarioActual > 2000 Entonces
        porcentajeAumento = 0.05
    Sino
        porcentajeAumento = 0.10
    Fin Si
	
    salarioNuevo = salarioActual + (salarioActual * porcentajeAumento)
	
    Escribir "Salario actual: $", salarioActual
    Escribir "Porcentaje de aumento: ", porcentajeAumento * 100, "%"
    Escribir "Nuevo salario con aumento: $", salarioNuevo

FinProceso
