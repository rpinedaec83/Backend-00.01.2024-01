Proceso ejercicio3	
	definir numero_x_validar Como Entero
	definir mensaje_validado Como Caracter
	Escribir "Ingresa el numero a validar"
	Leer numero_x_validar
	mensaje_validado = " no "
	Si numero_x_validar mod 10 == 4 Entonces
		mensaje_validado = " si "
	FinSi
	Escribir "El número ", numero_x_validar, mensaje_validado, "termina en 4."
FinProceso
