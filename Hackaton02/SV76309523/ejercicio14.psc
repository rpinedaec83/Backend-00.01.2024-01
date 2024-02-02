Proceso ejercicio14
	definir x, n ,contador Como Entero
	Escribir "escribe un numero ente 1 al 10"
	leer n
	x = 1 
	contador= 0
	Si n > 0 y n <= 10 Entonces
		Mientras x <= n Hacer
			si n mod x == 0 Entonces
				contador = contador +1
			FinSi
			x = x + 1
		FinMientras
		si contador == 2 Entonces
			Escribir  "el numero " n " es primo"
		SiNo
			Escribir  "el numero " n " no es primo"
		FinSi
	SiNo
		Escribir "el numero ingresado no se encuentra entre 1 y el 10"
	Fin Si
FinProceso
