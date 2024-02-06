Proceso CalcularMedias
    Definir pares, imp, mediap, mediai, numero Como Entero
    
    pares = 0
    imp = 0
    mediap = 0
    mediai = 0
    
    Para i = 0 Hasta 9 Con Paso 1 Hacer
        Escribir "Ingrese numero"
        Leer numero
        
        Si numero MOD 2 = 0 Entonces
            pares = pares + numero
            mediap = mediap + 1
        Sino
            imp = imp + numero
            mediai = mediai + 1
        Fin Si
    Fin Para
    
    Escribir "Números pares media: ", pares / mediap, " Impares: ", imp / mediai
Fin Proceso