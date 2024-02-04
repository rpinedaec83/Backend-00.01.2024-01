Proceso Pregunta_36
	definir n, fibo Como Entero
	escribir "Ingrese cantidad de terminos : " 
	leer n
	a = 0
	b = 1
	escribir "Serie Fibonacci"
	escribir a
	escribir b
	Para i = 1 Hasta n - 2 Con Paso 1 Hacer
		fibo = a + b
		a = b
		b = fibo
		escribir fibo
	Fin Para
FinProceso
