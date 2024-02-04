//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso ejercicio17
	Definir hora Como Entero
	Definir minutos Como Entero
	Definir seg Como Entero
	
	//Ingresar la hora, minutos y segundos
	Escribir "Ingrese la hora (0-23): "
	Leer hora
	
	Escribir "Ingrese los minutos (0-59): "
	Leer minutos
	
	Escribir "Ingrese los segundos (0-59): "
	Leer seg
	
	//Validar los valores ingresados
	Si (hora < 0 | hora > 23  |  minutos < 0  |  minutos > 59  |  seg < 0  |  seg > 59) Entonces
		Escribir "Valores ingresados inválidos."
	SiNo
		//Incrementar los segundos
		seg <- seg + 1
	FinSi
	
	// Verificar si se debe incrementar los minutos o la hora
	Si (seg == 60) Entonces
		seg <- 0
		minutos <- minutos + 1
	FinSi
	
	Si (minutos == 60) Entonces
		minutos <- 0
		hora <- hora + 1
	FinSi
	
	Si (hora == 24) Entonces
		hora <- 0
	FinSi
	
	//Imprimir la hora en el siguiente segundo
	Escribir "La hora en el siguiente segundo es: hora: " hora " minutos: " minutos " segundos: " seg
FinProceso
