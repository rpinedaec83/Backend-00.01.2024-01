Algoritmo sin_titulo
	num1 = 0
	num2 = 0
	
	aux = 0
	Escribir "Escriba dos numeros ";
	Leer  num1, num2
	Repetir
		si num1 > num2 Entonces
			aux = x
			num1= num2
			num2= aux
		FinSi
		
	Hasta Que  num1 < num2
	
	Escribir "El mayor es " num2
	
FinAlgoritmo
