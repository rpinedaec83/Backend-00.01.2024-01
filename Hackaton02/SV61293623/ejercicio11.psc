Algoritmo MayorDeTresNumeros
    Definir numero1, numero2, numero3, mayor Como Entero
	
    Escribir "Escriba el primer numero"
    Leer numero1
	
    Escribir "Escriba el segundo numero"
    Leer numero2
	
    Escribir "Escriba el tercer numero"
    Leer numero3
	
    mayor = 0
	
    Si (numero1 >= numero2) y (numero1 >= numero3) Entonces
        mayor = numero1
    Sino
        Si (numero2 >= numero1) y (numero2 >= numero3) Entonces
            mayor = numero2
        Sino
            mayor = numero3
        Fin Si
    Fin Si
	
    Escribir "El mayor es ", mayor
Fin Algoritmo