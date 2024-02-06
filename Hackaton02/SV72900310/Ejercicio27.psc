//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de n�meros positivos, se debe acabar el programa al ingresar un n�mero negativo.


Proceso Ejercicio27
	
	Definir suma, contador, numero, media Como Real
	
    suma = 0
    contador = 0
	
    Escribir "Ingrese numeros positivos. Ingrese un numero negativo para finalizar."
	Leer numero
	
    Si numero < 0 Entonces
        Escribir "No se ingresaron numeros positivos."
    Sino
        Mientras numero >= 0 Hacer
            suma = suma + numero
            contador = contador + 1
			Escribir "Ingrese otro numero positivo o un numero negativo para finalizar."
            Leer numero
        FinMientras
		
        Si contador > 0 Entonces
            media = suma / contador
            Escribir "La media de los numeros ingresados es:", media
        Sino
            Escribir "No se ingresaron numeros positivos."
        FinSi
    FinSi
FinProceso
