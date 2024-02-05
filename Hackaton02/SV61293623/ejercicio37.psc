Algoritmo CalcularMCD
    Definir numero1, numero2, mcd, temp Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer numero1
	
    Escribir "Ingrese el segundo número:"
    Leer numero2
	
    Mientras numero2 <> 0 Hacer
        temp <- numero2
        numero2 <- numero1 % numero2
        numero1 <- temp
    Fin Mientras
	
    // El resultado es el M.C.D
    mcd <- numero1
	
    Escribir "El M.C.D de ", numero1, " y ", numero2, " es: ", mcd
FinAlgoritmo