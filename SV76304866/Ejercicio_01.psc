//Algoritmo pata leer un número por el teclado y determinar si tiene tres dígitos.
proceso ejercicio_01
	definir numero1 como numerica
	Escribir 'digite un numero de tres digitos'
	leer numero1
	
	Escribir numero1
	si numero1 > 99 y numero1 < 1000 Entonces
		Escribir 'El numero ' numero1 ' si contiene 3 digitos.'
	FinSi
	Mientras numero1 < 100  Hacer
		Escribir 'el numero ' numero1 ' no tiene 3 digitos, intentar de nuevo...'
		Leer numero1
	Fin Mientras
	Mientras numero1 > 999 Hacer
		Escribir 'el numero ' numero1 ' no tiene 3 digitos, intentar de nuevo...'
		Leer numero1
	Fin Mientras
FinProceso
	