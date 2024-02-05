Proceso ejercicio_21
	// Variables
    Definir numero, factorial, i Como Entero
	
    // Entrada de datos
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
	
    // Validar que el número sea no negativo
    Mientras numero < 0 Hacer
        Escribir "Por favor, ingrese un número no negativo:"
        Leer numero
    FinMientras
	
    // Inicializar el factorial a 1
    factorial <- 1
    i <- 1
	
    // Calcular el factorial
    Mientras i <= numero Hacer
        factorial <- factorial * i
        i <- i + 1
    FinMientras
	
    // Mostrar resultado
    Escribir "El factorial de ", numero, " es: ", factorial

FinProceso
