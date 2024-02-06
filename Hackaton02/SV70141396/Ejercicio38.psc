// Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso ejercicio_38
	Definir num, sumaDivisores, i Como Entero
    Escribir("Ingrese un número positivo para verificar si es un número perfecto: ")
    Leer num
	
    Si num <= 0 Entonces
        Escribir " Error: Ingrese un número positivo. "
    Sino
        sumaDivisores = 0
		
        Para i = 1 Hasta num / 2 Con Paso 1 Hacer
            Si num MOD i = 0 Entonces
                sumaDivisores = sumaDivisores + i
            FinSi
        FinPara
		
        Si sumaDivisores = num Entonces
            Escribir " El número ", num, " es un número perfecto. "
        Sino
            Escribir " El número ", num, " no es un número perfecto. "
        FinSi
    FinSi
	
FinProceso
