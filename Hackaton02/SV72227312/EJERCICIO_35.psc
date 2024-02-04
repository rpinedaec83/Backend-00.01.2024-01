Proceso  EJERCICIO_35
	Definir numero1, mayor1, menor1, contador Como Real
	Definir respuesta Como Caracter
	
    Repetir
		mayor1 <- -999999999999 
		menor1 <- 999999999999 
		
		Para contador <- 1 Hasta 20 Hacer
			Escribir "Ingrese el " ,contador, " número:"
			Leer numero1
			// Actualización de comparaciones
			Si numero1 > mayor1 Entonces
				mayor1 <- numero1
			FinSi
			Si numero1 < menor1 Entonces
				menor1 <- numero1
			FinSi
		FinPara
		
		Escribir "El número mayor es: ", mayor1
		Escribir "El número menor es: ", menor1
	
		Repetir	// Validación de respuesta ingresada
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso