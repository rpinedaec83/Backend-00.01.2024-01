Proceso AproximarPiNilakantha
    Definir n Como Entero
    Definir aproximacionPi, numerador, denominador Como Real
    
    aproximacionPi = 3
    numerador = 4
    denominador = 2
    
    Escribir "Ingrese el número de términos para la aproximación de ?:"
    Leer n
    
    Para i = 1 Hasta n Con Paso 1
        Si i % 2 = 1 Entonces
            aproximacionPi = aproximacionPi + numerador / (denominador * (denominador + 1) * (denominador + 2))
        Sino
            aproximacionPi = aproximacionPi - numerador / (denominador * (denominador + 1) * (denominador + 2))
        Fin Si
        
        denominador = denominador + 2
    Fin Para
    
    Escribir "La aproximación de ? con ", n, " términos es: ", aproximacionPi
Fin Proceso