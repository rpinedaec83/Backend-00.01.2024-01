//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso ejercicio38
	Definir n, a, e, r, c Como Enteros;
	
	Escribir "----------Numero Perfecto----------";
	Escribir "Ingrese el numero:";
	Leer n;
	c<-1;
	a<-0;
    Repetir
		r<-n%c;
		Si r=0 Entonces
			Escribir c;
			a<-a+c;
		FinSi
		c<-c+1;
	Hasta Que c=n
	Si a=n Entonces
		Escribir "----";
		Escribir a;
		Escribir "El numero es perfecto!";
	Sino
		Escribir "----";
		Escribir a;
		Escribir "El numero no es perfecto!";
	FinSi
FinProceso