Algoritmo OrdenarMayorAMenor
    Definir numero1, numero2, numero3 Como Entero
	
    Escribir "Ingrese el primer número: "
    Leer numero1
    Escribir "Ingrese el segundo número: "
    Leer numero2
    Escribir "Ingrese el tercer número: "
    Leer numero3
	
    Si numero1 <= numero2 y numero1 <= numero3 Entonces
        Si numero2 <= numero3 Entonces
            Escribir "Números ordenados de menor a mayor:", numero1, ", ", numero2, ", ", numero3
        Sino
            Escribir "Números ordenados de menor a mayor:", numero1, ", ", numero3, ", ", numero2
        FinSi
    Sino
        Si numero2 <= numero1 y numero2 <= numero3 Entonces
            Si numero1 <= numero3 Entonces
                Escribir "Números ordenados de menor a mayor:", numero2, ", ", numero1, ", ", numero3
            Sino
                Escribir "Números ordenados de menor a mayor:", numero2, ", ", numero3, ", ", numero1
            FinSi
        Sino
            Si numero1 <= numero2 Entonces
                Escribir "Números ordenados de menor a mayor:", numero3, ", ", numero1, ", ", numero2
            Sino
                Escribir "Números ordenados de menor a mayor:", numero3, ", ", numero2, ", ", numero1
            FinSi
        FinSi
    FinSi
FinAlgoritmo
