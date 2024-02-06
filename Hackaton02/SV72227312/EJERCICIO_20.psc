Proceso  EJERCICIO_20
	Definir num1, num2, num3, num4 Como Real
	Definir respuesta Como Caracter
	
    Repetir
		Repetir // Validación de número entero mayor igual a cero
			Escribir "Ingrese el primer numero:"
			Leer num1
			Si num1 <= 0 O TRUNC(num1) <> num1 Entonces
				Escribir "Número incorrecto, asegúrese que sea entero positivo (> 0)."
			SiNo
				Repetir
					Escribir "Ingrese el segundo numero:"
					Leer num2
					Si num2 <= 0 O TRUNC(num2) <> num2 Entonces
						Escribir "Número incorrecto, asegúrese que sea entero positivo (> 0)."
					SiNo
						Repetir
							Escribir "Ingrese el tercer numero:"
							Leer num3
							Si num3 <= 0 O TRUNC(num3) <> num3 Entonces
								Escribir "Número incorrecto, asegúrese que sea entero positivo (> 0)."
							SiNo
								Repetir
									Escribir "Ingrese el cuarto numero:"
									Leer num4
									Si num4 <= 0  O TRUNC(num4) <> num4 Entonces
										Escribir "Número incorrecto, asegúrese que sea entero positivo (> 0)."
									FinSi
								Hasta Que num4 > 0 Y TRUNC(num4) = num4
							FinSi
						Hasta Que num3 > 0 Y TRUNC(num3) = num3
					Finsi
				Hasta Que num2 > 0 Y TRUNC(num2) = num2
			FinSi
		Hasta Que num1 > 0 Y TRUNC(num1) = num1
		
		Escribir "Sus numeros ingresados son: ",num1,"; ",num2,"; ",num3,"; ",num4
		
		// Inicializar variables
		contadorPares <- 0
		mayor1 <- 0
		cuadradoSegundo <- 0
		media <- 0
		sumaComoNumeroEntero <- 0
		
		// Verificación de números pares
		Si num1 Mod 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		Si num2 Mod 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		Si num3 Mod 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		Si num4 Mod 2 = 0 Entonces
			contadorPares <- contadorPares + 1
		FinSi
		
		// Encontrar el mayor entre los cuatro
		mayor1 <- num1
		Si num2 > mayor1 Entonces
			mayor1 <- num2
		FinSi
		Si num3 > mayor1 Entonces
			mayor1 <- num3
		FinSi
		Si num4 > mayor1 Entonces
			mayor1 <- num4
		FinSi
		
		Escribir "Cantidad de números pares: ", contadorPares
		Escribir "El mayor de todos:", mayor1
		
		// Ultimas 3 funciones condicionales
		Si num3 Mod 2 = 0 Entonces
			cuadradoSegundo <- num2 * num2
			Escribir "Resultado cuadrado del segundo si el tercero es par: ", cuadradoSegundo
		SiNo
			Escribir "No se cumplió la condición para la 3ra operación"
		FinSi
		
		Si num1 < num4 Entonces
			media <- (num1 + num2 + num3 + num4) / 4
			Escribir "Media de los 4 números si el primero es menor que el cuarto: ", media
		SiNo
			Escribir "No se cumplió la condición para la 4ta operación"
		FinSi
		
		Si num2 > num3 Entonces
			condicion2 <- (num3 >= 50) Y (num3 <= 700)
			Si condicion2 Entonces
				sumaComoNumeroEntero <- num1 + num2 + num3 + num4
				Escribir "Suma de los 4 números: ", sumaComoNumeroEntero
			SiNo
				Escribir "No se cumplió la condición para la 5ta operación"
			FinSi
		SiNo
			Escribir "No se cumplió la condición para la 5ta operación"
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
