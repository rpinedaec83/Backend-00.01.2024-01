Proceso ejercicio_37
	// Variables
    Definir num1, num2, resto Como Entero
	
    // Ingreso de los dos números
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    // Aplicar el algoritmo de Euclides para encontrar el MCD
    Mientras num2 <> 0 Hacer
        resto <- num1 % num2
        num1 <- num2
        num2 <- resto
    FinMientras
	
    // Mostrar el resultado
    Escribir "El MCD de los dos números es: ", num1

FinProceso
