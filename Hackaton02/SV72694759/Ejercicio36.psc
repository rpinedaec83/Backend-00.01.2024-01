Proceso Ejercicio36
	Definir n, a, b, c, i Como Entero
	
    Escribir "Ingrese el número de términos de la serie de Fibonacci a calcular: "
    Leer n
	
    a <- 0
    b <- 1
	
    Escribir "Serie de Fibonacci con ", n, " términos:"
    Escribir a
    Escribir b
	
    Para i <- 3 Hasta n Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara
FinProceso
