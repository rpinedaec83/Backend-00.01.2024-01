Proceso Ejercicio20
	Definir num1, num2, num3, num4 Como Entero
    Definir cantidadPares, mayor, cuadradoSegundo, media, sumaTotal Como Real
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    
    cantidadPares = 0
    Si num1 % 2 = 0 Entonces cantidadPares = cantidadPares + 1 
	Fin Si
	Si num2 % 2 = 0 Entonces cantidadPares = cantidadPares + 1 
	Fin Si
	Si num3 % 2 = 0 Entonces cantidadPares = cantidadPares + 1 
	Fin Si
	Si num4 % 2 = 0 Entonces cantidadPares = cantidadPares + 1 
	Fin Si
					
					// Encontrar el mayor de los 4 números
					mayor = num1
					Si num2 > mayor Entonces mayor = num2 
					Fin Si
					Si num3 > mayor Entonces mayor = num3 
					Fin Si
					Si num4 > mayor Entonces mayor = num4 
					Fin Si
								
								// Realizar operaciones condicionales
								Si num3 % 2 = 0 Entonces
									cuadradoSegundo = num2 * num2
								Fin Si
								
								Si num1 < num4 Entonces
									media = (num1 + num2 + num3 + num4) / 4
								Fin Si
								
								Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
									sumaTotal = num1 + num2 + num3 + num4
								Fin Si
								
								// Mostrar resultados
								Escribir "Cantidad de números pares:", cantidadPares
								Escribir "El mayor de los 4 números es:", mayor
								
								Si num3 % 2 = 0 Entonces
									Escribir "El cuadrado del segundo número es:", cuadradoSegundo
								Fin Si
								
								Si num1 < num4 Entonces
									Escribir "La media de los 4 números es:", media
								Fin Si
								
								Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
									Escribir "La suma de los 4 números es:", sumaTotal
    Fin Si

FinProceso
