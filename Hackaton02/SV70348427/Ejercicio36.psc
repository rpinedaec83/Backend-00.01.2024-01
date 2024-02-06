Proceso Ejercicio36
    Definir terminos, i, anterior, actual, siguiente como entero
	
    Escribir "Ingrese la cantidad de términos de la serie de Fibonacci a calcular:"
    Leer terminos
	
    anterior = 0
    actual = 1
	
    Escribir "Los primeros dos términos de la serie de Fibonacci son: ", anterior, " y ", actual
	
    Para i = 3 Hasta terminos Con Paso 1
        siguiente = anterior + actual
        Escribir "Término ", i, ": ", siguiente
        anterior = actual
        actual = siguiente
    FinPara
FinProceso
