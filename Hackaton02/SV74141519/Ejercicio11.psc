Proceso Ejercicio11
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE NUMERO MAYOR --------------------"
	
	Escribir "Ingrese el primer numero: " 
    Leer num1 
	
    Escribir "Ingrese el segundo numero: " 
    Leer num2 
	
    Escribir "Ingrese el tercer numero: " 
    Leer num3 
	
    Si num1 >= num2 y num1 >= num3 Entonces
        nuMayor = num1
    Sino
        Si num2 >= num1 y num2 >= num3 Entonces
            nuMayor = num2
        Sino
            nuMayor = num3
        FinSi
    FinSi
	
    Escribir "El numero mayor es: " nuMayor 
	
FinProceso
