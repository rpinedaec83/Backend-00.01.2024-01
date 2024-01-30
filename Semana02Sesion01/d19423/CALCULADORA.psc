Proceso CALCULADORA
	
	numero1 = 0
	numero2 = 0
	resultado =0
	operacion = 0
	
	Escribir "Escribe el primer numero a calcular"
	Leer numero1
	Escribir "Escribe el segundo numero a calcular"
	Leer numero2
	
	Escribir "Escoge una operacion: 1 para SUMAR, 2 para RESTAR, 3 para MULTIPLICAR o 4 para DIVIDIR"
	
	Leer operacion
	
	Si operacion == 1 Entonces
		resultado = numero1 + numero2
	SiNo
		Si operacion == 2 Entonces
			resultado = numero1 - numero2
		SiNo
			Si operacion == 3 Entonces
				resultado = numero1 * numero2
			SiNo
				Si operacion == 4 Entonces
					resultado = numero1 / numero2
				SiNo
					Escribir "Escogio " operacion
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	
	Escribir "El resultado es " resultado
	
FinProceso
