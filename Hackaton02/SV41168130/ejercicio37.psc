//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso ejercicio37
	
	Definir temporal, a, b, c Como Real
	
	Escribir "Obtener el M.C.D de dos números por medio del algoritmo de Euclides"
	Escribir "Ingrese el primer número"
	Leer a
	num1 <- a
	
	Escribir "Ingrese el segundo número"
	Leer b
	num2 <- b
	
//	a=162078;
//	b=960;
	temporal=0;

	//1- Hacer que el valor a sea el mayor
	Si(a<b)
		temporal=a;
		a=b;
		b=temporal;
	FinSi

	//2- Si el resto es igual a 0 termina el algoritmo
	Escribir " "
	Escribir "Iniciamos la secuencia de divisiones"
	Mientras b<>0 Hacer
		
		//3-Calcular el resto de dividir a y b
		resto=a%b;
		Escribir "Division " a "/" b " = " a/b;
		Escribir "Resto " a%b;
		
		//4-Asignar el valor más pequeño a a
		a=b;
		
		//5-Asignar el resto a b
		b=resto;
//		Escribir a;
	FinMientras
	
	Escribir " "
	Escribir "El M.C.D de [" num1 "] y [" num2 "] es:" a; 
		
FinProceso
