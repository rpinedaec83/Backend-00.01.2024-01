Proceso Suma_primeros_numeros
	Definir n,suma como entero 
	
    Escribir "Ingrese un numero entero positivo: "
    Leer n
	
    Si n > 0 Entonces
        Para i = 1 Hasta n
            suma = suma + i
        FinPara
		
        Escribir "La suma de todos los numeros enteros hasta ", n, " es: ", suma
    Sino
        Escribir "Ingrese un numero entero positivo, reinicie."
    FinSi
FinProceso
