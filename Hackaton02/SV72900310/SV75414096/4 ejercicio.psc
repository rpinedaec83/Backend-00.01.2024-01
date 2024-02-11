Algoritmo sin_titulo
	num1 = 0
	num2 = 0
	num3 = 0
	aux = 0
	Escribir "Escriba  numeros";
	Leer  num1, num2, num3
	Repetir
		si num1 > num2 Entonces
			aux = num1
			num1 = num2
			num2 = aux
		FinSi
		si num2 > num3 Entonces
			aux = num2
			num2 = num3
			num3 = aux
			
		FinSi
		
	Hasta Que  num1 < num2 y num2 < num3
	
	Escribir num1
	Escribir num2
	Escribir num3
FinAlgoritmo
