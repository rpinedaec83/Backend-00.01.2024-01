//11. Hacer un algoritmo en Pseint que lea tres n�meros y diga cu�l es el mayor.


Proceso Ejercicio11
	
	Definir num1, num2, num3, mayor Como Real
	
    Escribir "Ingrese el primer numero:"
    Leer num1
	
    Escribir "Ingrese el segundo numero:"
    Leer num2
	
    Escribir "Ingrese el tercer numero:"
    Leer num3
	
    Si num1 >= num2 y num1 >= num3 Entonces
        mayor = num1
    Sino
        Si num2 >= num1 y num2 >= num3 Entonces
            mayor = num2
        Sino
            mayor = num3
        FinSi
    FinSi
	
    Escribir "El numero mayor es:", mayor
	
FinProceso
