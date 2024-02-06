// 33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.


Proceso Ejercicio33
	
	Definir continuar Como Caracter
	
    Mientras continuar <> "N" Hacer
		
        Escribir "Desea continuar con el programa? (S/N):"
        Leer continuar
		
        continuar = Mayusculas(continuar)
		
    FinMientras
	
    Escribir "Fin del programa."
	
FinProceso
