Proceso ejercicio37
	
	Definir numero1,numero2,nmenor,nmayor Como Entero
	Definir cociente,residuo Como Real
	
	Escribir "Algoritmo de Euclides para hallar el Maximo Comun Divisor (MCD)."
	Escribir "Por favor, ingrese los dos numeros a calcular."

	repetir1 = "verdadero";
	
	Leer numero1;
	Leer numero2;
	
	numero1<-numero1;
	numero2<-numero2; 
	Si numero1>numero2 Entonces 
		nmayor = numero1;
		nmenor = numero2;
	Sino
		nmayor = numero2;
		nmenor = numero1;
	FinSi
	
	
	Repetir
		residuo = nmayor;
		Escribir "Numeros a utilizar: " nmayor " y " nmenor "."
		Repetir
			residuo = residuo - nmenor;
			cociente = cociente + 1;
		Hasta Que residuo < nmenor
		
		Escribir "Resultado:";
		Escribir "Residuo: " residuo ". Cociente: " cociente ".";
		
		Si nmayor mod nmenor == 0 Entonces
			Escribir "Ya no se pueden realizar mas divisiones.";
			repetir1 = "falso";
		SiNo
			Escribir "Aun se pueden realizar mas divisiones.";
			cociente = 0;
			nmayor = nmenor;
			nmenor = residuo;
		
		FinSi
	Hasta Que repetir1 = "falso"
	
	Escribir "El Maximo Comun Divisor (MCD) es " nmenor ".";
	
FinProceso

//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.