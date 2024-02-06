// Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Proceso ejercicio_15
	Definir centimetros, pulgadas Como Real
	Definir libras, kilogramos Como Real
	
	Escribir "Conversion de centimetros a pulgadas y libras a kilogramos"
	
	Escribir "Ingrese la longitud en centrimetros"
	Leer centimetros
	
	Escribir "Ingrese el peso en libras"
	Leer libras
	
	pulgadas <- centimetros / 2.54
	kilogramos <- libras / 2.205
	
	Escribir "Resultado de la conversion"
	Escribir centimetros , " centimetros equivale a ",pulgadas, "pulgadas"
	Escribir libras , " libras equivale a ",kilogramos, "kilogramos"
	
FinProceso
