Proceso ejercicio4
	Escribir "escriba tres numeros"
	numero1 = 0
	numero2 = 0
	numero3 = 0
	aux = 0
	Leer numero1 , numero2 , numero3
	Repetir
		Si numero1 > numero2 Entonces
			aux = numero1
			numero1 = numero2
			numero2 = aux
		Fin Si
		Si numero2 > numero3 Entonces
			aux = numero2
			numero2 = numero3
			numero3 = aux
		Fin Si
	Hasta Que numero1 < numero2 y numero2 < numero3
	Escribir "ordenados de menor a mayor"
	Escribir numero1," ", numero2," ", numero3 
FinProceso
