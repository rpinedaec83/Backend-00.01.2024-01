Proceso ejercicio35
	
	Dimension numeros[20];
	Definir nmayor Como Real;
	Definir nmenor Como Real;
	
	Escribir "Algoritmo para averiguar el numero menor y el numero mayor de una lista de 20 numeros";
	Escribir "A continuacion, ingrese los 20 numeros a comparar.";
	
	Para i <- 1 Hasta 20
		Leer numeros[i];
		
	FinPara
	
	nmayor = numeros[1];
	nmenor = numeros[1];
	
	Para i <- 1 Hasta 20
		Si numeros[i] > nmayor Entonces
			nmayor = numeros[i];
		SiNo Si numeros[i] < nmenor Entonces
			nmenor = numeros[i];
		FinSi
		FinSi
	FinPara
	
	Escribir "El numero mas grande es " nmayor ".";
	Escribir "El numero mas pequeño es " nmenor ".";

FinProceso

//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.