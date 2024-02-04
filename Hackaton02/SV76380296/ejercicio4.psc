Proceso ejercicio4
	
	Definir a,b,c Como Numerica;
	
	Escribir "Algoritmo para ordenar a, b, y c de menor a mayor.";
	Escribir "Introduzca el valor de a: ";
	Leer a;
	Escribir "Introduzca el valor de b: ";
	Leer b;
	Escribir "Introduzca el valor de c: ";
	Leer c;
	
	a = a;
	b = b; 
	c = c;
	
	Si a>b y b>c Entonces
		Escribir c ", " b ", y " a ".";
	Sino Si a>c y c>b Entonces
		Escribir b ", " c ", y " a ".";
	Sino Si b>c y c>a Entonces
		Escribir a ", " c ", y " b ".";
	Sino Si b>a y a>c Entonces
		Escribir c ", " a ", y " b ".";
	Sino Si c>b y b>a Entonces
		Escribir a ", " b ", y " c ".";
	Sino Si c>a y a>b Entonces
		Escribir b ", " a ", y " c ".";
	SiNo
		Escribir "Algo salio mal. Evita colocar numeros iguales.";
	FinSi
	FinSi	
	FinSi
	FinSi
	FinSi
	FinSi 
	
FinProceso 

//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.