Proceso ejercicio9
	
	Definir ganancia Como Numerica
	aumento = 0
	
	Escribir "Escriba cuanto esta ganando actualmente para determinar su aumento!"
	Leer ganancia
	
	Si ganancia <= 2000
		aumento = 10
	SiNo
		aumento = 5
	FinSi
	
	Escribir "Su aumento es del " aumento "%, y su nuevo salario sera de " ganancia*(100+aumento)/100 "!"
	
FinProceso

//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.