//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso ejercicio35
	Definir cant Como Entero
	Definir num, num_mayor, num_menor Como Real
	
	cant <- 20
	
	Escribir "Ingrese el [1] número:"
	Leer num
	num_mayor <- num
	num_menor <- num
	
	Para i <- 2 Hasta cant Hacer
		Escribir "Ingrese el [" i "] número: "
		Leer num
		Si num > num_mayor Entonces
			num_mayor <- num
		FinSi
		
		Si num < num_memor Entonces
			num_menor <- num
		FinSi
	FinPara
	
	Escribir "El número mayor es: " num_mayor
	Escribir "El número menor es: " num_menor
	
FinProceso
