//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Proceso ejercicio_04
	Definir numero1, numero2, numero3, myr Como Entero
	
	Escribir " Escriba el primer numero "
	Leer numero1
	
	Escribir " Escriba el segundo numero "
	Leer numero2
	
	Escribir " Escriba el tercer numero "
	Leer numero3
	
	Si numero1>numero2
			myr = numero1
			numero1 = numero2
			numero2 = myr
		FinSi
		
		Si numero2 > numero3 Entonces
			myr = numero2
			numero2 = numero3
			numero3 = myr
		FinSi
		
		Si numero1 > numero2 Entonces
			myr = numero1
			numero1 = numero2
			numero2 = myr
		FinSi
		
		Escribir " Los números ordenados de menor a mayor son: ", numero1, ", ", numero2, ", ", numero3, ""
		

FinProceso
