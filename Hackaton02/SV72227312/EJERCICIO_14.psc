Proceso  EJERCICIO_14
	Definir numero1 Como Real
    Definir i, contador Como Entero
	Definir respuesta Como Caracter
	
    Repetir
		contador = 0
		Repetir // Validación de número entero del 1 al 10.
			Escribir "Ingrese un número entero del 1 al 10:"
			Leer numero1
			Si numero1 < 1 o numero1 > 10 o TRUNC(numero1) <> numero1 Entonces
				Escribir "Número incorrecto, asegúrese que sea un entero del 1 al 10."
			FinSi
		Hasta Que TRUNC(numero1) = numero1 y numero1 >= 1 y numero1 <= 10 
		
		Para i <- 1 Hasta numero1
            Si numero1 MOD i = 0 Entonces
                contador <- contador + 1
            FinSi
        FinPara
	
        Si contador = 2 Entonces // Determinar si el número es primo o no
            Escribir "El número ", numero1, " es primo."
        Sino
            Escribir "El número ", numero1, " no es primo."
        FinSi
	
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