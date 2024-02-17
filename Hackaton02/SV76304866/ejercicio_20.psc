//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes 
//operaciones:

//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre 
//los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso ejercicio_20
    Definir numero1, numero2, numero4, cantidadPares, mayor, media, sumaTotal Como Entero
	
    Escribir 'Ingrese el primer número:'
    Leer numero1
    Escribir 'Ingrese el segundo número:'
    Leer numero2
    Escribir 'Ingrese el tercer número:'
    Leer numero3
    Escribir 'Ingrese el cuarto número:'
    Leer numero4
	
    cantidadPares = 0
    mayor = 0
    media = 0
    sumaTotal = 0
	
    Si numero1 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
    Si numero2 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
    Si numero3 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
    Si num4 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    mayor = numero1
    Si numero2 > mayor Entonces
        mayor = numero2
    FinSi
    Si numero3 > mayor Entonces
        mayor = numero3
    FinSi
    Si numero4 > mayor Entonces
        mayor = numero4
    FinSi
	
    Si numero3 Mod 2 = 0 Entonces
        numero2 = numero2 * numero2
    FinSi
	
    Si numero1 < num4 Entonces
        media = (numero1 + numero2 + numero3 + numero4) / 4
    FinSi
	
    Si numero2 > numero3 Y numero3 >= 50 Y num3 <= 700 Entonces
        sumaTotal = numero1 + numero2 + numero3 + numero4
    FinSi
	
    Escribir 'Cantidad de números pares:', cantidadPares
    Escribir 'El mayor de todos:', mayor
    Escribir 'Resultado cuadrado del segundo (si el tercero es par):', numero2
    Escribir 'Media de los 4 números (si el primero es menor que el cuarto):', media
    Escribir 'Suma de los 4 números (si se cumple la segunda condición):', sumaTotal

FinProceso
