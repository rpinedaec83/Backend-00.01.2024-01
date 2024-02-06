//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 
//tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Proceso ejercicio_9
	Definir salario_base Como Real
	Definir aumento Como Real
	Definir salario_final Como Real
	
	salario_base <- 0
	aumento <- 0
	salario_final <- 0
		
	Escribir "Ingrese el salario base $: " 
	Leer salario_base
	
	Si salario_base > 0 & salario_base <= 2000 Entonces
		aumento = salario_base * 0.1
	SiNo
		Si salario_base > 2000 Entonces
			aumento = salario_base * 0.05
		SiNo
			salario_base = 0
		FinSi
	FinSi
	
	salario_final <- salario_base + aumento
	
	Escribir "Aumento del trabajador"
	Escribir "----------------------"
	Escribir "El salario base es $" salario_base
	Escribir "El aumento es $" aumento
	Escribir "El salario final es $" salario_final
FinProceso
