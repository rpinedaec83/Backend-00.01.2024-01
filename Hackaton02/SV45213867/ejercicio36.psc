Proceso ejercicio_36
	// Variables
    Definir numero, a, b, c, i Como Entero
	
    // Ingreso del número hasta el cual se calculará la serie de Fibonacci
    Escribir "Ingrese el número hasta el cual desea calcular la serie de Fibonacci:"
    Leer numero
	
    // Inicializar los primeros dos números de la serie
    a <- 0
    b <- 1
	
    // Mostrar los dos primeros números
    Escribir a
    Escribir b
	
    // Calcular y mostrar la serie de Fibonacci hasta el número ingresado
    Para i <- 3 Hasta numero Hacer
        c <- a + b
        Escribir c
		
        // Actualizar valores para el siguiente cálculo
        a <- b
        b <- c
    FinPara

FinProceso
