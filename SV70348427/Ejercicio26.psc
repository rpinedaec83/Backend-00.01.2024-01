Proceso Ejercicio26
    // Definir variables
    Definir dividendo, divisor, cociente, resto como Entero
	
    // Leer el dividendo
    Escribir "Ingrese el dividendo: "
    Leer dividendo
	
    // Leer el divisor
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    // Inicializar cociente y resto
    cociente = 0
    resto = dividendo
	
    // Calcular cociente y resto por restas sucesivas
    Mientras resto >= divisor Hacer
        resto = resto - divisor
        cociente = cociente + 1
    FinMientras
	
    // Mostrar resultados
    Escribir "Cociente: ", cociente
    Escribir "Resto: ", resto
FinProceso
