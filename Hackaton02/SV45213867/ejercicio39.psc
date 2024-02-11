Proceso ejercicio_39
	// Variables
    Definir n Como Entero
    Definir pi, termino Como Real
	
    // Ingreso de la cantidad de términos
    Escribir "Ingrese la cantidad de términos para la aproximación de pi:"
    Leer n
	
    // Inicializar la variable pi
    pi <- 0
	
    // Calcular la aproximación de pi usando la serie de Gregory-Leibniz
    Para i <- 0 Hasta n - 1 Hacer
        // Calcular el término actual de la serie
        termino <- 4 / (1 + 2 * i)
		
        // Sumar o restar el término según el índice
        Si i % 2 = 0 Entonces
            pi <- pi + termino
        Sino
            pi <- pi - termino
        FinSi
    FinPara
	
    // Mostrar la aproximación de pi
    Escribir "La aproximación de pi con ", n, " términos es: ", pi

FinProceso
