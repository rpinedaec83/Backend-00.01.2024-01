Proceso Ejercicio14
	
	Definir num1, i, contador Como entero
	Escribir "Ingrese un numero"
	Leer num1
	
	i=1
	contador = 0
	
	Mientras i<=num1 Hacer
			si num1%i==0 Entonces
				contador=contador+1
			FinSi
			i= i + 1
	Fin Mientras
	
	si contador=2 Entonces
		Escribir "El numero es primo"
	SiNo
		Escribir "El numero no es primo"
	FinSi
	
FinProceso
