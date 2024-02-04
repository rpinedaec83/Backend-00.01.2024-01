Proceso ejercicio24
	
	Definir numero1 Como Entero;
	suma = 0;
	
	Escribir "Algoritmo de suma de numeros consecutivos.";
	Escribir "Ingrese el numero del cual sacar la suma consecutiva.";
	
	Para numero1 <- 1 Hasta 1000 Hacer
		Si numero1 mod 2 = 0
			suma = suma+numero1;
		FinSi
	FinPara
	
	Escribir "La suma de los numeros pares hasta 1000 es de " suma ".";
	
FinProceso

//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.