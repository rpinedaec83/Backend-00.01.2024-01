Proceso Ejercicio4
		Definir num1, num2, num3, menor, medio, mayor Como Entero
		
		Escribir "Ingrese el primer número: "
		Leer num1
		Escribir "Ingrese el segundo número: "
		Leer num2
		Escribir "Ingrese el tercer número: "
		Leer num3
		
		Si num1 < num2 Y num1 < num3 Entonces
			menor <- num1
		Sino
			Si num2 < num3 Entonces
				menor <- num2
			Sino
				menor <- num3
			FinSi
		FinSi
		
		Si num1 > num2 Y num1 > num3 Entonces
			mayor <- num1
		Sino
			Si num2 > num3 Entonces
				mayor <- num2
			Sino
				mayor <- num3
			FinSi
		FinSi
		
		medio <- num1 + num2 + num3 - menor - mayor
		
		Escribir "Números ordenados de menor a mayor: ", menor Mod 10, ", ", medio Mod 10, ", ", mayor Mod 10
FinProceso
