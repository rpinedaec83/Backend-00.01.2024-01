Proceso Ejercicio20
	
	Escribir "Escriba el primer numero"
	Leer numero1
	
	Escribir "Escriba el segundo numero"
	Leer numero2
	
	Escribir "Escriba el tercer numero"
	Leer numero3
	
	Escribir "Escriba el cuarto numero"
	Leer numero4
	
	
	
	si numero1%2==0 Entonces
		Escribir"El primer numero es par"
	SiNo
		Escribir"El primer numero es impar"
	FinSi
	
	
	
	si numero2%2==0 Entonces
		Escribir"El primer numero es par"
	SiNo
		Escribir"El primer numero es impar"
	FinSi
	
	
	
	si numero3%2==0 Entonces
		Escribir"El primer numero es par"
		
		numero2cuadrado= numero2*numero2
		Escribir "El segundo numero al cuadrado es: " numero2cuadrado
		
	SiNo
		Escribir"El primer numero es impar"
	FinSi
	
	
	
	si numero4%2==0 Entonces
		Escribir"El primer numero es par"
	SiNo
		Escribir"El primer numero es impar"
	FinSi
	
	
	
	Si numero1<numero4 Entonces
		Mediadelos4numeros = (numero1+numero2+numero3+numero4)/4
		Escribir "La media de los 4 numeros es: " Mediadelos4numeros
	FinSi
	
	
	
	
	Si numero2>numero3 Entonces
		Si numero3>=50 & numero3<=700 Entonces
			
			Sumadelos4numeros = numero1+numero2+numero3+numero4
			Escribir "La suma de los 4 numeros es: " Sumadelos4numeros
		FinSi
	Fin Si
	
	
	Si numero1>numero2&numero1>numero3&numero1>numero4 Entonces
		Escribir "El numero mayor es el primero"
	FinSi
	
	Si numero2>numero1&numero2>numero3&numero2>numero4 Entonces
		Escribir "El numero mayor es el segundo"
	FinSi
	
	Si numero3>numero1&numero3>numero2&numero3>numero4 Entonces
		Escribir "El numero mayor es el tercero"
	FinSi
	
	Si numero4>numero1&numero4>numero2&numero4>numero3 Entonces
		Escribir "El numero mayor es el cuarto"
	FinSi
	
FinProceso
