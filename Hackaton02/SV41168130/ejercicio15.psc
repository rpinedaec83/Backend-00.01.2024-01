//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Proceso ejercicio15
	Definir  centimetros,pulgadas Como Real
	Definir  libras, kilogramos Como Real
	Escribir  "Conversion de centimetros a pulgadas y libras a kilogramos"
	
	Escribir  "Ingrese la longitud en centimetros"
	Leer   centimetros
	Escribir  " Ingrese el peso en libras"
	leer libras
	
	pulgadas <- centimetros / 2.54
	kilogramos <- libras / 2.205
	
	Escribir  "Resultado de la conversion es:"
	Escribir  centimetros ," centimetros equivale a ",pulgadas, " pulgadas"
	Escribir  libras, " libras equivale a ", kilogramos, " kilogramos"
		
FinProceso	
