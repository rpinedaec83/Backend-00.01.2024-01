Proceso Ejercicio33
	Definir continuar Como Logico
    continuar <- Verdadero
	
    Mientras continuar Hacer
			
        Escribir "¿Desea continuar con el programa? (Sí/No): "
        Leer opcion
		
        Si opcion = "No" Entonces
            continuar <- Falso
        FinSi
    FinMientras
	
    Escribir "Fin del programa."
FinProceso
