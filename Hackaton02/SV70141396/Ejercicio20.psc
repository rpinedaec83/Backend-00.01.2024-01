// Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
// ¿Cuántos números son Pares?
// ¿Cuál es el mayor de todos?
// Si el tercero es par, calcular el cuadrado del segundo.
// Si el primero es menor que el cuarto, calcular la media de los 4 números.
// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
// Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Proceso ejercicio_20
	Definir num1, num2, num3, num4 Como Entero
	Escribir " ingrese un numero entero positivo "
	Leer num1
	Escribir " ingrese un numero entero positivo "
	Leer num2
	Escribir " ingrese un numero entero positivo "
	Leer num3
	Escribir " ingrese un numero entero positivo "
	Leer num4
	
	cont = 0
	SI num1 Mod 2 = 0 Entonces
		cont = cont + 1
	FinSi
	
		si num2 Mod 2 = 0 Entonces
			cont = cont + 1
		FinSi
		
			si num3 Mod 2 = 0 Entonces
				cont = cont + 1
			FinSi
	
				si num4 Mod 2 = 0 Entonces
					cont = cont + 1
				FinSi
	
				Escribir " Hay " cont " numeros pares "
				
				nummay = num1
				si num2 > nummay Entonces
					nummay = num2
				FinSi
				
					si num3 > nummay Entonces
						nummay = num3
					FinSi
					
						si num4 > nummay Entonces
							nummay = num4
						FinSi
						Escribir " El numero mayor es : " nummay
						
						Si num3 Mod 2 = 0 Entonces
							potnc = num2 * num2
							
						FinSi
						Escribir " El cuadrado de " num2  " es : " potnc
						
						Si num1 < num4 Entonces
							media = ( num1 + num2 + num3 + num4 ) / 4
						FinSi
						Escribir " La media es : " media
						
						Si num2 > num3 Entonces
							Si( num3 > 50 y num3 < 700 ) Entonces
							Escribir num3 " Si esta comprendido entre 50 y 700 "
						SiNo
							Escribir num3 " No esta comprendido entre 50 y 700 "
						FinSi
					FinSi
					
					Si num1 < num4 Entonces
						suma =  num1 + num2 + num3 + num4 
					FinSi
					Escribir " La suma es : " suma
FinProceso
