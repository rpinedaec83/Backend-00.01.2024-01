//3.Hacer un algoritmo en Pseint que lea un n�mero y determinar si termina en 4.


Proceso Ejercicio3
	
	Definir numero, residuo Como Entero;
	
    Escribir "Ingrese un numero:"
    Leer numero;
	
    residuo = abs(numero) % 10
	
    Si residuo = 4 Entonces;
        Escribir "El numero termina en 4.";
    Sino
        Escribir "El numero no termina en 4.";
    FinSi

	
FinProceso
