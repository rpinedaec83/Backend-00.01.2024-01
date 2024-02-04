// Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.
Proceso Ejercicio27
	 num = 0
	
    suma = 0
    cantidad = 0
	
    Escribir "Ingrese números positivos para calcular la media. Ingrese un número negativo para finalizar."
	
    Repetir
        Escribir "Ingrese un número: "
        Leer num
		
        Si num >= 0 Entonces
            suma = suma + num
            cantidad = cantidad + 1
        Sino
            Si cantidad > 0 Entonces
                Escribir "La media de los números ingresados es: ", suma / cantidad
            Sino
                Escribir "No se ingresaron números positivos."
            FinSi
        FinSi
		Hasta  que num < 0
FinProceso
 