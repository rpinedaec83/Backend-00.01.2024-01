Proceso Ejerciocio27
	Definir numero, suma, contador Como Real
	
    suma <- 0
    contador <- 0
	
    Escribir "Ingrese números positivos para calcular la media. Ingrese un número negativo para terminar."
	
    Leer numero
	
    Mientras numero >= 0 Hacer
        suma <- suma + numero
        contador <- contador + 1
		
        Escribir "Ingrese otro número positivo o un número negativo para terminar."
        Leer numero
    FinMientras
	
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los números positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinProceso
