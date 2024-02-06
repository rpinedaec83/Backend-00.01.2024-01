Proceso  EJERCICIO_34
	Definir numero1, multiplicador Como Entero
	Definir respuesta Como Caracter
	
    Repetir
		Para numero1 <- 1 Hasta 9 Hacer
			Escribir "La tabla de multiplicar de ", numero1, " es:"
			Para multiplicador <- 1 Hasta 10 Hacer
				Escribir numero1," X ",multiplicador," = ",numero1*multiplicador
			FinPara
			Escribir "--------------------------"
		Fin Para
		
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
