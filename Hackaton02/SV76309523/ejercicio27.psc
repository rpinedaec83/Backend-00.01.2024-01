Proceso ejercicio27
	Definir suma, contador, numero, media Como Real
	
    suma = 0
    contador = 0
	
    Escribir "Ingrese números positivos (Ingrese un número negativo para terminar el programa):"
    Leer numero
	
    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
        Leer numero
    FinMientras
	
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de la lista es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinProceso
