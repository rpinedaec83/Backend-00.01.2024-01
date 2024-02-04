//4.	Hacer un algoritmo en Pseint que lea tres números enteros y los muestree de menor a mayor
Proceso pregunta_04
	Definir num01 Como Entero
	Definir num02 Como Entero
	Definir num03 Como Entero
	Definir temp  Como Entero
	
	Escribir " Ingrese el primer numero entero:"
	Leer num01
	
	Escribir "Ingrese el segundo numero entero:"
	Leer num02
	
	Escribir "Ingrese el tercer numero entero:"
	Leer num03
	
	Si num01 > num02 Entonces
		temp <- num01
		num01 <- num02
		num02 <- temp
	FinSi
	
	Si num02 > num03 Entonces
		temp <- num02
		num02 <- num03
		num03 <- temp
	FinSi
	
	Si num01 > num02 Entonces
		temp <- num01
		num01 <- num02
		num02 <- temp
	FinSi
	
	Escribir "Lios numero ordenados de menor a mayor son:", num01, ", " num02, ", " num03
FinProceso
