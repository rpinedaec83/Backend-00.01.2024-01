Proceso  EJERCICIO_33
	Definir respuesta Como Caracter
	
    Repetir
		Repetir	// Validación de respuesta ingresada
			Escribir "¿Desea continuar con el programa? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso
