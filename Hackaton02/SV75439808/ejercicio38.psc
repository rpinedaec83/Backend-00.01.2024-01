Proceso Ejercicio_38
	Definir n, sum_d Como Entero
	Escribir "Ingrese un número"
	Leer n
	sum_d = 0
	Para dsr Desde 1 Hasta n / 2 Hacer
		Si n % dsr = 0 Entonces
			sum_d = sum_d + dsr
		Fin Si
	Fin Para
	Si sum_d = n Entonces
		Escribir n, " es un número perfecto."
	Sino
		Escribir n, " no es un número perfecto."
	Fin Si

FinProceso
