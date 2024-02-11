Proceso ejercicio_27
	// Variables
    Definir numero, suma, cantidad, media Como Real
	
    // Inicializar variables
    suma <- 0
    cantidad <- 0
	
    // Entrada de datos y cálculo de medias
    Escribir "Ingrese números positivos (ingrese un número negativo para terminar):"
    Leer numero
	
    Mientras numero >= 0 Hacer
        // Validar que el número sea positivo
        Si numero >= 0 Entonces
            suma <- suma + numero
            cantidad <- cantidad + 1
        FinSi
		
        // Leer el próximo número
        Leer numero
    FinMientras
	
    // Calcular la media si se ingresaron números positivos
    Si cantidad > 0 Entonces
        media <- suma / cantidad
        Escribir "La media de los números positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
	
FinProceso
