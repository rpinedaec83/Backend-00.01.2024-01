Proceso Ejercicio15
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE CONVERSION DE UNIDADES --------------------"
	
	Escribir "¿Que conversion desea realizar?"
	Escribir "Opcion 1: Convertir Centimetros a Pulgadas"
	Escribir "Opcion 2: Convertir Libras a Kilogramos"
	Leer opc
	
	
    
	Segun opc Hacer
		1:
			Escribir "Ingrese la cantidad en centímetros: " 
			Leer centimetros 
			
			pulgadas = centimetros * 0.393701
			
			Escribir "La cantidad en pulgadas es: " pulgadas
		2:
			
			Escribir "Ingrese la cantidad en libras: " 
			Leer libras 
		
			kilogramos = libras * 0.453592
			Escribir "La cantidad en kilogramos es: " kilogramos
			
		default :
			
			Escribir "Ingrese una opcion correcta"
			
	Fin Segun
	

FinProceso
