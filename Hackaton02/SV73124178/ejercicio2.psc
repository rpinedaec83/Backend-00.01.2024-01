Proceso ejercicio2
	Definir numero_x_validar Como Entero
	definir mensaje_al_usuario Como Caracter
	Escribir "Digite el numero para validar si es negativo"
	Leer  numero_x_validar
	si numero_x_validar < 0 Entonces
		mensaje_al_usuario = " es ";
	SiNo
		mensaje_al_usuario = " no es ";
	FinSi
	Escribir "El número ", numero_x_validar, mensaje_al_usuario, "negativo."
FinProceso
