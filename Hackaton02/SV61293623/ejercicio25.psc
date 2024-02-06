Proceso CalcularFactorial
    Definir numero, resultado, i Como Entero
	
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        resultado = 1
		
        Para i = numero Hasta 1 Con Paso -1 Hacer
            resultado = resultado * i
        Fin Para
		
        Escribir "El factorial de ", numero, " es: ", resultado
    Fin Si
Fin Proceso