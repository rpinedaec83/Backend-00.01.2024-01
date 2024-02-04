Proceso EJERCICIO_3
	// El ejercicio esta hecho para numeros enteros
	Definir respuesta Como Caracter
	Definir numero1 Como Real
	
	Repetir
		Escribir "Escriba un numero"
		Leer  numero1
		Si Trunc(numero1) <> numero1 Entonces
			Escribir "Ingrese un número entero, inténtelo de nuevo."
		Sino	
			si numero1 Mod 10 = 4 Entonces
				Escribir "el Numero termina en 4"
			SiNo
				Escribir "el Numero no termina en 4"
			FinSi
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