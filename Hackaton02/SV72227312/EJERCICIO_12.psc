Proceso EJERCICIO_12
	Definir respuesta Como Caracter
	Definir num1, num2 Como Real
	
	Repetir
		Escribir "Ingrese el primer número"
		Leer  num1
		Escribir "Ingrese el segundo número"
		Leer  num2
		
		Si num1 > num2 Entonces
			Escribir "El mayor es:", num1
		Sino
			Si num2 > num1 Entonces
				Escribir "El mayor es:", num2
			Sino
				Escribir "Los números son iguales y tienen el valor de:", num1
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