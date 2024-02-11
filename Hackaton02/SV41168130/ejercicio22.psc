//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

SubProceso f <- SumaRecursiva ( n )
    definir f Como Entero;
    Si n <= 0 Entonces
        escribir "Alerta, Ingrese un número mayor a cero";
        f <- -1;
    Sino 
        Si n <= 1 Entonces
            f = 1;
        SiNo
            f <- SumaRecursiva(n-1)+n;
        FinSi
    FinSi
Fin SubProceso

Proceso ejercicio22
	Definir n Como Entero
	Definir suma Como Entero
		
	Escribir "Hacer un algoritmo en Pseint para calcular la suma de los n primeros números"
	Escribir "Ingrese el valor de n (número positivo): "
	Leer n
	suma <- SumaRecursiva(n)
	
	Si n > 0 Entonces
		Escribir "La suma de los " n " primeros números es: " suma
	FinSi
	
FinProceso
