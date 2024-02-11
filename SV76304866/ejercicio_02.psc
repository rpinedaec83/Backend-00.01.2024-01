//Algoritmo para leer un número entero por el teclado y determinar si es negativo.
Proceso ejercicio_02
	definir numero1 como entero
	Escribir 'digite un numero entero negativo'
	leer numero1
	
	Escribir numero1
	si numero1 < 0 Entonces
		Escribir 'El numero ' numero1 ' si es un entero negativo.' 
	SiNo
		Escribir 'el numero ' numero1 ' no es un entero negativo.'
	FinSi
	Mientras numero1 > -1 Hacer
		Escribir 'vuelve a intentarlo'
		leer numero1
	Fin Mientras
	Escribir 'El numero ' numero1 ' si es un entero negativo.'
FinProceso
