Proceso Ejerciocio38
	Definir num, sumaDivisores Como Entero
	
    Escribir "Ingrese un número para verificar si es perfecto: "
    Leer num
	
    sumaDivisores <- 0
	

    Para i Desde 1 Hasta num / 2 Hacer
        Si num Mod i = 0 Entonces
            sumaDivisores <- sumaDivisores + i
        FinSi
    FinPara
	

    Si sumaDivisores = num Entonces
        Escribir num, " es un número perfecto."
    Sino
        Escribir num, " no es un número perfecto."
    FinSi
FinProceso
