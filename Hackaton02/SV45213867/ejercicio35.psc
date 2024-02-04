Proceso ejercicio_35
    // Variables
    Definir numero, mayor, menor Como Real
    Definir i Como Entero
	
    // Inicializar las variables mayor y menor con el primer número ingresado
    Escribir "Ingrese el primer número:"
    Leer numero
    mayor <- numero
    menor <- numero
	
    // Ingresar los restantes diecinueve números
    Para i <- 2 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
		
        // Actualizar el número mayor si es necesario
        Si numero > mayor Entonces
            mayor <- numero
        FinSi
		
        // Actualizar el número menor si es necesario
        Si numero < menor Entonces
            menor <- numero
        FinSi
    FinPara
	
    // Mostrar resultados
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor

FinProceso
