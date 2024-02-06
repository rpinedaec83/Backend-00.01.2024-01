Proceso ejercicio20
	Definir num1, num2, num3, num4 Como Entero
    Definir cantidadPares, mayor, resultadoOperacion Como Real
	Escribir "ingrese 4 numeros postivos"
	Leer num1,num2,num3,num4
	cantidadPares = 0
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
        mayor =  num2
    FinSi
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
    Si num4 > mayor Entonces
        mayor = num4
    FinSi
	
	Si num3 % 2 = 0 Entonces
        resultadoOperacion = num2 * num2
        Escribir "El cuadrado del segundo número es: " resultadoOperacion
    FinSi
    Si num1 < num4 Entonces
        resultadoOperacion = (num1 + num2 + num3 + num4) / 4
        Escribir "La media de los 4 números es: " resultadoOperacion
    FinSi
    Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
        resultadoOperacion <- num1 + num2 + num3 + num4
        Escribir "La suma de los 4 números es: " resultadoOperacion
    FinSi
FinProceso
