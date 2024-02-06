Proceso EsNumeroPerfecto
    Definir numero, sumaDivisores Como Entero
    
    Escribir "Ingrese un número:"
    Leer numero
    
    sumaDivisores <- 0
    
    Para divisor <- 1 Hasta numero / 2
        Si numero MOD divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        Fin Si
    Fin Para
    
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    Fin Si
Fin Proceso
