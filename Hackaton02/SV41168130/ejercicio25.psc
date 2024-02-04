// 25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
SubProceso f <- Factorial ( n )
    definir f Como Entero;
    Si n <= 0 Entonces
        escribir "Alerta, factorial solo definido para número naturales"
        f <- -1;
    Sino 
        Si n <= 1 Entonces
            f = 1;
        SiNo
            f <- Factorial(n-1)*n;
        FinSi
    FinSi
Fin SubProceso

Proceso ejercicio25
    Definir n Como Entero;
	Escribir "Hacer un algoritmo en Pseint para calcular el factorial de un número n de una forma distinta"
	Escribir "Ingrese el valor de n"
    Leer n;
    Definir f Como Entero;
    f <- Factorial(n);
    Si f <> -1 Entonces
		Escribir "El factorial de " n " es : " f; 
	FinSi
FinProceso
