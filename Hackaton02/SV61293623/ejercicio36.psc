Proceso SerieFibonacci
    Definir cant, a, b, temp Como Entero
    
    Escribir "Ingrese el límite para la serie de Fibonacci:"
    Leer cant
    
    a <- 0
    b <- 1
    
    Escribir a
    
    Mientras b <= cant Hacer
        Escribir b
		
        temp <- b
        b <- a + b
        a <- temp
    Fin Mientras
Fin Proceso