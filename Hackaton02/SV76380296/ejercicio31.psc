Proceso ejercicio31
	
	Dimension numeros[10]
	Definir imparcantidad,parcantidad,sumaimpar,sumapar Como Entero
	
	Para i <- 1 Hasta 10 Hacer
		Escribir "Ingresar un numero. Va " i " numeros de 10."
		Leer numeros[i]
		
		Si numeros[i] mod 2 = 0 Entonces
			sumapar = sumapar + numeros[i]
			parcantidad = parcantidad + 1
		SiNo
			sumaimpar = sumaimpar + numeros[i]
			imparcantidad = imparcantidad + 1
		FinSi
	FinPara
	
	Escribir "Media final de numeros pares: " sumapar/parcantidad "."
	Escribir "Media final de numeros impares: " sumaimpar/imparcantidad "."
	
	
FinProceso

//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.