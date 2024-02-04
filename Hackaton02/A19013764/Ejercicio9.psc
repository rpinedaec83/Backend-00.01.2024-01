Proceso Ejercicio9
	Definir salarioActual, nuevoSalario Como Real
	
    Escribir "Ingrese el salario actual del trabajador: "
    Leer salarioActual
	
    Si salarioActual > 2000 Entonces
        nuevoSalario <- salarioActual * 1.05
    Sino
        nuevoSalario <- salarioActual * 1.10
    FinSi
	
    Escribir "El nuevo salario del trabajador es: $", nuevoSalario
FinProceso
