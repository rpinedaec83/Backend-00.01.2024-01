Algoritmo sin_titulo
	num1 = 0
	num2= 0
	num3= 0
	aux = 0
	Escribir "Escriba tres numeros ";
	Leer  num1,num2,num3
	Repetir
		si x > num2 Entonces
			aux = x
			x= num2
			num2= aux
		FinSi
		si num2 > num3 Entonces
			aux = num2
			num2 = num3
			num3= aux
			
		FinSi
		
	Hasta Que  x < num2 y num2< num3
	
	Escribir "El mayor es " num3
FinAlgoritmo
