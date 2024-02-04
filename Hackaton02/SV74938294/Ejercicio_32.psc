Proceso Ejercicio_32
	
	Definir ciudad Como Caracter
	definir poblacion Como Entero
	definir col,fil Como Entero
	
	Dimension ciudad[11]
	dimension poblacion[11]
	
	ciudad[1] = ["Chimbote"]
	ciudad[2] = ["Pucallpa"]
	ciudad[3] = ["Iquitos"]
	ciudad[4] = ["Cuzco"]
	ciudad[5] = ["Huancayo"]
	ciudad[6] = ["Piura"]
	ciudad[7] = ["Chiclayo"]
	ciudad[8] = ["Trujillo"]
	ciudad[9] = ["Arequipa"]
	ciudad[10] = ["Callao"]
	ciudad[11] = ["Lima"]
	
	poblacion[1] = 354300
	poblacion[2] = 327600
	poblacion[3] = 377609
	poblacion[4] = 428450
	poblacion[5] = 456250
	poblacion[6] = 473000
	poblacion[7] = 552500
	poblacion[8] = 919900
	poblacion[9] = 1008290
	poblacion[10] = 994494
	poblacion[11] = 8574974
	
	definir mas Como Entero
	definir indice Como Entero
	
	Para i=1 Hasta 11 Hacer
		si mas <= poblacion[i] Entonces
			mas = poblacion[i]
			indice = i
		FinSi
	FinPara
	
	Escribir "La ciudad con más población es: " ciudad[indice] " y su cantidad de habitantes es: " poblacion[indice]
	
	
FinProceso
