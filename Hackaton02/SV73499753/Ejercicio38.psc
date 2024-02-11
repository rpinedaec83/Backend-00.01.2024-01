//  Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Ejercicio38
	num= 0
	sumaDivisores = 0
	divisor  = 0
    Escribir "Ingrese un número: "
    Leer num
    sumaDivisores = 0
    Para divisor = 1 Hasta num / 2
        Si num % divisor = 0 Entonces
            sumaDivisores = sumaDivisores + divisor
        FinSi
    FinPara
	
    Si sumaDivisores = num Entonces
        Escribir "El número ", num, " es un número perfecto."
    Sino
        Escribir "El número ", num, " no es un número perfecto."
    FinSi
	
FinProceso
