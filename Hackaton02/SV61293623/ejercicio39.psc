Proceso AproximarPi
    Definir n Como Entero
    Definir aproximacionPi, termino Como Real
    
    aproximacionPi = 0
    
    Escribir "Ingrese el número de términos para la aproximación de ?:"
    Leer n
    
    Para i = 1 Hasta n Con Paso 1
        termino = 4 / (2 * i - 1)
        
        Si i % 2 = 1 Entonces
            aproximacionPi = aproximacionPi + termino
        Sino
            aproximacionPi = aproximacionPi - termino
        Fin Si
    Fin Para
    
    Escribir "La aproximación de ? con ", n, " términos es: ", aproximacionPi
Fin Proceso