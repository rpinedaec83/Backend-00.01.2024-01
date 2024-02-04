Proceso ejercicio_26
	// Variables
    Definir dividendo, divisor, cociente, resto Como Entero
	
    // Entrada de datos
    Escribir "Ingrese el dividendo:"
    Leer dividendo
	
    Escribir "Ingrese el divisor:"
    Leer divisor
	
    // Validar que el divisor sea distinto de 0
    Mientras divisor = 0 Hacer
        Escribir "Por favor, ingrese un divisor diferente de 0:"
        Leer divisor
    FinMientras
	
    // Inicializar cociente y resto a 0
    cociente <- 0
    resto <- 0
	
    // Calcular cociente y resto por medio de restas sucesivas
    Mientras dividendo >= divisor Hacer
        dividendo <- dividendo - divisor
        cociente <- cociente + 1
    FinMientras
	
    // El valor final de dividendo es el resto
    resto <- dividendo
	
    // Mostrar resultado
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
FinProceso
