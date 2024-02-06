//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Proceso ejercicio14
	Definir numeroIngresado, iteracion, divisionResiduoCero Como Entero;
	
    Escribir "Determinar si un número ingresado, es un número primo.";
    Escribir "Ingrese un número entero del 1 al 10: ";
    Leer numeroIngresado;
	
	Si numeroIngresado >= 0 & numeroIngresado <=10 Entonces
		// Comenzaremos dividiendo el número ingresado entre 1.
		iteracion <- 1;
		
		// Número de ocasiones en las que la división dio como resultado un residuo de cero.
		divisionResiduoCero <- 0;
		
		Mientras iteracion <= numeroIngresado Hacer
			
			Si(numeroIngresado % iteracion == 0) Entonces
				divisionResiduoCero = divisionResiduoCero + 1;
			FinSi
			
			iteracion <- iteracion + 1;
			
		FinMientras
		
		Si(divisionResiduoCero == 2) Entonces
			Escribir "El número ingresado es un número primo.";
		SiNo
			Escribir "El número ingresado NO es un número primo.";
		FinSi   	
	SiNo
		Escribir "Debe ingresar un número entero entre 1 y 10"
	FinSi
    
FinProceso
