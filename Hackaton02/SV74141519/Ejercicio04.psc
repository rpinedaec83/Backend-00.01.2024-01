Proceso Ejercicio04
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA ORDENADOR DE NUMEROS --------------------"
	
	Definir num1, num2, num3, temp Como Entero
	
    Escribir "Ingrese el primer n�mero: "
    Leer num1
	
    Escribir "Ingrese el segundo n�mero: "
    Leer num2
	
    Escribir "Ingrese el tercer n�mero: "
    Leer num3
	
    Si (num1 > num2) Entonces
        temp <- num1
        num1 <- num2
        num2 <- temp
    FinSi
	
    Si (num2 > num3) Entonces
        temp <- num2
        num2 <- num3
        num3 <- temp
    FinSi
	
    Si (num1 > num2) Entonces
        temp <- num1
        num1 <- num2
        num2 <- temp
    FinSi
	
    Escribir "Los n�meros ordenados de menor a mayor son: ", num1, ", ", num2, ", ", num3
	
FinProceso
