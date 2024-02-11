//Algoritmo para leer un número y determinar si termina en 4
Proceso ejercicio_03
	definir numero1 como entero
	Escribir 'digite un numero entero negativo'
	leer numero1
	
	Escribir numero1
	si numero1 % 10 = 4 Entonces
		Escribir 'El numero ' numero1 ' si termina en 4.' 
	
	FinSi
	Mientras numero1 % 10 <> 4 Hacer
		Escribir 'vuelve a intentarlo'
		leer numero1
	Fin Mientras
	Escribir 'El numero ' numero1 ' si termina en 4'
FinProceso
