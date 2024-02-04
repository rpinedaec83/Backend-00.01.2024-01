Proceso EJERCICIO_2
	
	Definir respuesta Como Caracter
	Definir numero1 Como Real
	
	Repetir
		Escribir "Escriba un numero"
		Leer  numero1
		si numero1 < 0 Entonces
			Escribir "el Numero es negativo"
		SiNo
			Escribir "el Numero  no es negativo"
		FinSi
		//Validación de respuesta ingresada
		Repetir
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso