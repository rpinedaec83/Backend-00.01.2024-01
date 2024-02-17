//Algoritmo pata leer tres números enteros y los muestre de menor a mayor
Proceso ejercicio_04
	Definir numero1, numero2, numero3, temp Como Entero
	
	escribir 'escriba el primer numero'
	leer numero1 
	escribir 'escriba el segundo numero'
	leer numero2
	escribir 'escriba el tercer numero'
	leer numero3
	
	Si numero1 > numero2 Entonces
        temp = numero1
        numero1 = numero2
        numero2 = temp
    FinSi
	
    Si numero2 > numero3 Entonces
        temp = numero2
        numero2 = numero3
        numero3 = temp
    FinSi
	
    Si numero1 > numero2 Entonces
        temp = numero1
        numero1 = numero2
        numero2 = temp
    FinSi
	
  
    Escribir 'Los números ordenados de menor a mayor son:'
    Escribir numero1, ', ', numero2, ', ', numero3
FinProceso
