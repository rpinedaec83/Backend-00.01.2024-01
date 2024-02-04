Proceso Ejercicio25
	Definir n, factorial, i Como Entero
    
    Escribir "Ingrese un número (n): "
    Leer n
    
    factorial <- 1
    i <- 1
    
    Mientras i <= n
        factorial <- factorial * i
        i <- i + 1
    Fin Mientras
    
    Escribir "El factorial de ", n, " es: ", factorial
    
FinProceso
