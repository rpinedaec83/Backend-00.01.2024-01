// Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso Ejercicio33
	Definir opcion, continuar Como Caracter
	
    Repetir
        Escribir "Realizar alguna operación (S/N)?"
        Leer continuar
        Si continuar = "S" O continuar = "s" Entonces
            Escribir "Operación realizada."
        Sino
            Escribir "Programa finalizado."
        FinSi
		Hasta que continuar <> "S" Y continuar <> "s"
FinProceso
