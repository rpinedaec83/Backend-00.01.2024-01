
//13.	Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso ejercicio_13
	// Variable
    Definir letra Como Caracter
	
    // Entrada de datos
    Escribir "Ingrese una letra:"
    Leer letra
	
    // Convertir la letra a minúscula
    letra <- Minusculas(letra)
	
    // Verificar si la letra es una vocal
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
        Escribir "La letra ingresada no es una vocal."
    FinSi

FinProceso
