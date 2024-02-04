Proceso ejercicio_22
	// Variables
    Definir n, suma, i Como Entero
	
    // Entrada de datos
    Escribir "Ingrese un número entero positivo (n):"
    Leer n
	
    // Validar que n sea un número positivo
    Mientras n <= 0 Hacer
        Escribir "Por favor, ingrese un número entero positivo:"
        Leer n
    FinMientras
	
    // Inicializar la suma a 0
    suma <- 0
    i <- 1
	
    // Calcular la suma de los números iguales o menores a n
    Mientras i <= n Hacer
        suma <- suma + i
        i <- i + 1
    FinMientras
	
    // Mostrar resultado
    Escribir "La suma de los números iguales o menores a ", n, " es: ", suma


FinProceso
