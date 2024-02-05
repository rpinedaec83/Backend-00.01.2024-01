Proceso ejercicio20
	
	Dimension numeros[4]
	
	Escribir "Algoritmo multifuncion"
	
	Para i = 1 Hasta 4 Hacer
		Escribir "Escriba el numero " i
		Leer numeros[i]
		Si numeros[i] <= 0 Entonces 
			i = i - 1
			Escribir "Vuelva a ingresar el numero " i+1 ". Tiene que ser positivo."
		FinSi
	FinPara
	
	mayor = numeros[1]
	numerovalor = 1
	numeropar = 0
	
	Para i = 1 Hasta 4 Hacer
		numero = numeros[i]
		Si numero > mayor Entonces
			mayor = numero
			numerovalor = i
		FinSi
		Si numero mod 2 = 0
			numeropar = numeropar + 1
		FinSi
	FinPara
	
	Si numeros[3] mod 2 == 0
		Escribir "El cuadrado del segundo numero es " numeros[2]^2 "."
		Escribir "Esto debido a que el tercer numero es par."
	FinSi
	
	Si numeros[1] < numeros[4]
		Escribir "El promedio es " (numeros[1]+numeros[2]+numeros[3]+numeros[4])/4 "."
		Escribir "Esto debido a que el primer numero es menor al cuarto."
	FinSi
	
	Si numeros[2] > numeros[3]
		Si numeros[3] >= 50 y numeros[3] <= 700
			Escribir "La suma final de los numeros es " numeros[1]+numeros[2]+numeros[3]+numeros[4] "."
			Escribir "Esto debido a que el segundo numero es mayor al tercero, y el tercer numero esta entre 50 y 700."
		FinSi
	FinSi
	
	Escribir "El numero en posicion " numerovalor " es el mayor, con un valor de " mayor "."
	Escribir "Hay " numeropar " numeros pares."
	
FinProceso

//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.