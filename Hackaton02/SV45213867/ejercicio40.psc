Proceso ejercicio_30
	// Variables
    Definir n Como Entero
    Definir pi Como Real
    pi <- 3 // Inicializamos con el primer término de la serie
	
    // Ingreso de la cantidad de términos
    Escribir "Ingrese la cantidad de términos para la aproximación de pi:"
    Leer n
	
    // Calcular la aproximación de pi usando la serie de Nilakantha
    Para i Desde 1 Hasta n Hacer
        // Calcular el numerador y denominador del término actual
        Definir numerador Como Real
        Definir denominador Como Real
        numerador <- 4 * ((-1) ^ i)
        denominador <- (2 * i) * ((2 * i) + 1) * ((2 * i) + 2)
		
        // Sumar o restar el término según el índice
        pi <- pi + (numerador / denominador)
    FinPara
	
    // Mostrar la aproximación de pi
    Escribir "La aproximación de pi con ", n, " términos es: ", pi
FinProceso
