Proceso ejercicio36
	
	numero1 = 0
	numero2 = 1
	nuevonumero1 = 0
	nuevonumero2 = 1
	repeticiones = 1
	
	Escribir "Algoritmo para calcular la serie de Fibonacci."
	
	Repetir
		
		nuevonumero2 = numero1 + numero2
		Escribir numero1 " + " numero2 " = " nuevonumero2 "." 
		nuevonumero1 = numero2
		numero2 = nuevonumero2
		numero1 = nuevonumero1
		repeticiones = repeticiones - 1
		
		Si repeticiones <= 0 Entonces
			Escribir "Cuantas veces mas quiere repetir la serie? 0 para terminar."
			Leer repeticiones
			Si repeticiones < 0 Entonces
				Escribir "No se ingreso un numero valido. Terminando proceso..."
				repeticiones = 0
			FinSi
		FinSi
	Hasta Que repeticiones = 0
	
FinProceso

//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.