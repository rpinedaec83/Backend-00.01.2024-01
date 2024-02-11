Algoritmo sin_titulo
	Definir numero, suma, cantidad, media Como Real
	
	media=0
	suma = 0
    cantidad = 0
	
    Mientras numero >= 0
        Escribir "Ingrese un número (ingrese un número negativo para finalizar): "
        Leer numero
		
        Si numero >= 0 Entonces
			
            suma = suma + numero
            cantidad = cantidad + 1
        FinSi
    FinMientras
	
    Si cantidad > 0 Entonces
        media = suma / cantidad
        Escribir "La media de los números positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinAlgoritmo
