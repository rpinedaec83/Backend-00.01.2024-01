Proceso ejercicio9
	Definir salarioActual, nuevoSalario Como Real
    
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
    
    Si salarioActual > 2000 Entonces
        nuevoSalario <- salarioActual + (salarioActual * 0.05)
    Sino
        nuevoSalario <- salarioActual + (salarioActual * 0.10)
    FinSi
    
    Escribir "Salario actual: $", salarioActual 
    Escribir "Nuevo salario con aumento: $", nuevoSalario
FinProceso
