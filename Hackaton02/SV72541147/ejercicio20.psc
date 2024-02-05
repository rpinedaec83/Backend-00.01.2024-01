Proceso ejercicio20
	Definir num1, num2, num3, num4 Como Entero
    Definir cantidadPares, mayor, media, suma Como Real
    
    Escribir "Ingrese el primer número:"
    Leer num1
    
    Escribir "Ingrese el segundo número:"
    Leer num2
    
    Escribir "Ingrese el tercer número:"
    Leer num3
    
    Escribir "Ingrese el cuarto número:"
    Leer num4
    
    cantidadPares <- 0
    mayor <- 0
    media <- 0
    suma <- 0
    
    Si num1 % 2 = 0 Entonces
        cantidadPares <- cantidadPares + 1
    FinSi
    
    Si num2 % 2 = 0 Entonces
        cantidadPares <- cantidadPares + 1
    FinSi
    
    Si num3 % 2 = 0 Entonces
        cantidadPares <- cantidadPares + 1
    FinSi
    
    Si num4 % 2 = 0 Entonces
        cantidadPares <- cantidadPares + 1
    FinSi
    
    mayor <- num1
    Si num2 > mayor Entonces
        mayor <- num2
    FinSi
    
    Si num3 > mayor Entonces
        mayor <- num3
    FinSi
    
    Si num4 > mayor Entonces
        mayor <- num4
    FinSi
    
    Si num3 % 2 = 0 Entonces
        num2 <- num2 * num2
    FinSi
    
    Si num1 < num4 Entonces
        media <- (num1 + num2 + num3 + num4) / 4.0
    FinSi
	
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        suma <- num1 + num2 + num3 + num4
    FinSi
    
    Escribir "Cantidad de números pares: ", cantidadPares
    Escribir "El mayor de todos: ", mayor
    Escribir "Cuadrado del segundo si el tercero es par: ", num2
    Escribir "Media de los 4 números si el primero es menor que el cuarto: ", media
    Escribir "Suma de los 4 números si el segundo es mayor que el tercero y este está entre 50 y 700: ", suma
FinProceso
