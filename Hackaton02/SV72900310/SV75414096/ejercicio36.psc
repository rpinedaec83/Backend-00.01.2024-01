Algoritmo sin_titulo
	Definir limite, a, b, c, i Como Entero
	
    a = 0
    b = 1
	
    Escribir "Ingrese el límite de la serie de Fibonacci: "
    Leer limite
	
    Escribir a
    Escribir b
	
    Para i <-3 Hasta limite
        c <- a + b
        Escribir c
        a <- b
        b <- c
		
	FinPara
	
	
		
FinAlgoritmo
