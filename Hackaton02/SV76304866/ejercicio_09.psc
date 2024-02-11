//Algoritmo para determinar el aumento de un trabajador, se debe tomar 
//en cuenta que si ganaba más de $2000 tendrá un
//aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso ejercicio_09
    Definir sueldoActual, nuevoSueldo Como Real
    Definir aumentoPorcentaje Como Real
	
    Escribir 'Ingrese el salario actual del trabajador:'
    Leer sueldoActual
	
    Si sueldoActual > 2000 Entonces
        aumentoPorcentaje = 0.05 
    Sino
        aumentoPorcentaje = 0.10  
    FinSi
    nuevoSueldo = sueldoActual + (sueldoActual * aumentoPorcentaje)
	
    Escribir 'Sueldo actual del trabajador: $', sueldoActual
    Escribir 'Aumento aplicado: ', aumentoPorcentaje * 100, '%'
    Escribir 'Nuevo sueldo: $', nuevoSueldo
	
FinProceso
