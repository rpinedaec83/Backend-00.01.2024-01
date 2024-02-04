// Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Ejercicio36
	n =  0
	a = 0 
	b= 0 
	c = 0
	Escribir "Ingrese el número de términos para la serie de Fibonacci: "
    Leer n
	Escribir "Serie de Fibonacci hasta el término ", n, ":"
    a = 0
    b = 1
	
    Escribir a
    Escribir b
	
    Para i = 3 Hasta n
        c = a + b
        Escribir c
        a = b
        b = c
    FinPara
FinProceso
