Algoritmo MayorDeDosNumeros
    Definir numero1, numero2, mayor Como Entero
	
    Escribir "Escriba el primer numero"
    Leer numero1
	
    Escribir "Escriba el segundo numero"
    Leer numero2
	
    mayor = 0
	
    Si numero1 >= numero2 Entonces
        mayor = numero1
    Sino
        mayor = numero2
    Fin Si
	
    Escribir "El mayor es ", mayor
Fin Algoritmo