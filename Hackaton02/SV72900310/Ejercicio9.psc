//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.


Proceso Ejercicio9
	
	Definir salarioActual, nuevoSalario Como Real
	
    Escribir "Ingrese el salario actual:"
    Leer salarioActual
	
    Si salarioActual > 2000 Entonces
        nuevoSalario = salarioActual *1.05
        Escribir "El nuevo salario con aumento del 5% es:", nuevoSalario
    Sino
        nuevoSalario = salarioActual *1.1
        Escribir "El nuevo salario con aumento del 10% es:", nuevoSalario
    FinSi
	
FinProceso
