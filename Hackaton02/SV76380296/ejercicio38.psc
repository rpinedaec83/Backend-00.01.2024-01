Proceso ejercicio38
	
	Definir numero1,sumadivision Como Entero
	
	Escribir "Algoritmo para determinar si un numero es perfecto.";
	Leer numero1;
	
	Para i <- 1 hasta numero1/2 Hacer
		Si numero1 mod i == 0 Entonces
			sumadivision = sumadivision + i;
		FinSi
	FinPara
	
	Si sumadivision == numero1 y numero1 <> 1 Entonces
		Escribir "El numero " numero1 " es perfecto!"	
	SiNo
		Escribir "El numero " numero1 " no es perfecto."
	FinSi
	
FinProceso

//38. Hacer un algoritmo en Pseint que nos permita saber si un n�mero es un n�mero perfecto.