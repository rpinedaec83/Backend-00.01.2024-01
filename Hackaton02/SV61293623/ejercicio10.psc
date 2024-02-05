Algoritmo VerificarParImpar
    Definir numero, resto Como Entero
	
    Escribir "Escriba el numero"
    Leer numero
	
    resto = numero % 2
	
    Si resto == 0 Entonces
        Escribir "El numero es par"
    Sino
        Escribir "El numero es impar"
    Fin Si
Fin Algoritmo