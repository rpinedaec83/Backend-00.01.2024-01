Proceso ejercicio23
	
	Definir numero1,numero2 Como Entero;
	suma = 0
	
	Escribir "Algoritmo de suma de numeros impares consecutivos.";
	Escribir "Ingrese el numero del cual sacar la suma de los numeros impares consecutivos."
	Leer numero1
	
	Para numero2 <- 1 Hasta numero1 Hacer
		Si numero2 mod 2 = 1
			suma = suma+numero2
		FinSi
	FinPara
	
	Escribir "La suma de los numeros impares entre los primeros " numero1 " numeros es de " suma "."
	
FinProceso

//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.