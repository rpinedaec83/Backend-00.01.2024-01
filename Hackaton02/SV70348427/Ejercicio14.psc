Algoritmo DeterminarPrimo
    Definir numero, i, contador como Entero
	
    Escribir("Ingrese un número del 1 al 9:")
    Leer numero
	
    Si (numero >= 1) Y (numero <= 9) Entonces
        contador = 0
		
        Para i = 2 Hasta numero - 1 Con Paso 1
            Si (numero % i = 0) Entonces
                contador = contador + 1
            Fin Si
        Fin Para
		
        Si contador = 0 Entonces
            Escribir("El número es primo.")
        Sino
            Escribir("El número no es primo.")
        Fin Si
    Sino
        Escribir("El número ingresado no está en el rango permitido.")
    Fin Si
FinAlgoritmo
