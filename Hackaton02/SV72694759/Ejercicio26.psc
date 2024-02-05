Proceso Ejercicio26
	Escribir "Ingrese el dividendo: "
    Leer dividendo
    
    Escribir "Ingrese el divisor: "
    Leer divisor
    
    cociente <- 0
    resto <- dividendo
    
    Mientras resto >= divisor
        resto <- resto - divisor
        cociente <- cociente + 1
    Fin Mientras
    
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
FinProceso
