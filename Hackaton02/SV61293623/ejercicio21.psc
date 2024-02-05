Proceso CalcularFactorial
    Definir numero, resultado, i Como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "Error"
    Sino
        resultado = 1
		
        Para i = 2 Hasta numero Con Paso 1 Hacer
            resultado = resultado * i
        Fin Para
		
        Escribir "El factorial de ", numero, " es: ", resultado
    Fin Si
Fin Proceso