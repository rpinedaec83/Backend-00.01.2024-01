//Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:

//�Cu�ntos n�meros son Pares?
//�Cu�l es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.


Proceso Ejercicio20
	
	Definir num1, num2, num3, num4, cantidadPares, mayor, sumaTotal Como Entero
	definir media como real
	
    Escribir "Ingrese el primer numero:"
    Leer num1
	
    Escribir "Ingrese el segundo numero:"
    Leer num2
	
    Escribir "Ingrese el tercer numero:"
    Leer num3
	
    Escribir "Ingrese el cuarto numero:"
    Leer num4
	
    cantidadPares = 0
    mayor = 0
    media = 0
    sumaTotal = 0
	
    Si num1 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num2 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num3 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num4 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    mayor = num1
	
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
	
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
	
    Si num4 > mayor Entonces
        mayor = num4
    FinSi
	
    Si num3 % 2 = 0 Entonces
        num2 = num2 * num2
    FinSi
	
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
    FinSi
	
    Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
        sumaTotal = num1 + num2 + num3 + num4
    FinSi
	
    Escribir "Cantidad de numeros pares:", cantidadPares
    Escribir "Numero mayor:", mayor
	
    Si num3 % 2 = 0 Entonces
        Escribir "Cuadrado del segundo numero:", num2
    FinSi
	
    Si num1 < num4 Entonces
        Escribir "Media de los 4 numeros:", media
    FinSi
	
    Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
        Escribir "Suma de los 4 numeros:", sumaTotal
    FinSi
	
FinProceso
