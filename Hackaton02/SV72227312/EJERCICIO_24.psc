Proceso  EJERCICIO_24
	Definir n Como Real
    Definir suma1 Como Entero
	Definir respuesta Como Caracter
	
    Repetir
        suma1 <- 0
        Para i <- 2 Hasta 1000 Hacer
            suma1 <- suma1 + i
			i <- i + 1
        FinPara
		
        Escribir "La suma de los números pares hasta 1000 es: ", suma1
		
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
