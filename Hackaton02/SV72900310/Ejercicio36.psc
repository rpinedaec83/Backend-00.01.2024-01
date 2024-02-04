// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.


Proceso Ejercicio36
	
	Definir n, i Como Entero
	definir a, b, c Como Real
	
    Escribir "Cuantas repeticiones vamos a hacer?"
    Leer n
	
    a = 1
	b = 1
	
    Escribir "Serie de Fibonacci:"
    Escribir a
    Escribir b
	
    Para i = 3 Hasta n Hacer
        c = a + b
        Escribir c
        a = b
        b = c
    FinPara
	
FinProceso
