Proceso ejercicio1
	//Definimos la variable número
	definir numero_solicitado como Entero
	definir validacion_mensaje Como Caracter
	//Mensaje en el prompt para solicitar el numero
	Escribir "Digite el numero"
	//Leemos el numero
	Leer numero_solicitado
	//Verificamos si tiene 3 digitos
	si numero_solicitado > 99 y numero_solicitado < 1000 Entonces
		validacion_mensaje = " tiene"
		//Escribir "El número ", numero_solicitado, " tiene 3 dígitos"
	SiNo
		validacion_mensaje = " no tiene"
		//Escribir "El número ", numero_solicitado, " tiene 3 dígitos"
	FinSi
	
	Escribir "El número ", numero_solicitado, validacion_mensaje, " 3 dígitos"
FinProceso
