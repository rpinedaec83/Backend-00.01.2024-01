Proceso ejercicio_38
	// Variables
    Definir numero, sumaDivisores, i Como Entero
	
    // Ingreso del número
    Escribir "Ingrese un número:"
    Leer numero
	
    // Inicializar la suma de divisores
    sumaDivisores <- 0
	
    // Calcular la suma de los divisores propios del número
    Para i <- 1 Hasta numero / 2 Hacer
        Si numero % i = 0 Entonces
            sumaDivisores <- sumaDivisores + i
        FinSi
    FinPara
	
    // Determinar si el número es perfecto
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
		
	FinSi

FinProceso
