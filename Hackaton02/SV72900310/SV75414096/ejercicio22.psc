Algoritmo sin_titulo
	n=0
	suma = 0
    
    Escribir "Ingrese el valor de n para calcular la suma de los números impares menores o iguales a n: "
    Leer n
	
    Si n > 0 Entonces
        Para i = 1 Hasta n
            Si i MOD 2 <> 0 Entonces
                suma <- suma + i
            FinSi
        FinPara
		
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    Sino
        Escribir "Por favor, ingrese un valor de n mayor que 0 para calcular la suma."
    FinSi
FinAlgoritmo
