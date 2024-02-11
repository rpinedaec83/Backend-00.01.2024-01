//16.	Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso ejercicio_16
	// Variable
    Definir numero Como Entero
	
    // Entrada de datos
    Escribir "Ingrese un número del 1 al 7:"
    Leer numero
	
    // Verificar el número ingresado y mostrar el día correspondiente
    Segun numero Hacer
        1:
            Escribir "El número corresponde al día lunes."
        2:
            Escribir "El número corresponde al día martes."
        3:
            Escribir "El número corresponde al día miércoles."
        4:
            Escribir "El número corresponde al día jueves."
        5:
            Escribir "El número corresponde al día viernes."
        6:
            Escribir "El número corresponde al día sábado."
        7:
            Escribir "El número corresponde al día domingo."
        De Otro Modo:
            Escribir "Número no válido. Por favor, ingrese un número del 1 al 7."
    FinSegun
FinProceso
