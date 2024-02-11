Proceso Suma_numeros_impares
	Definir n,suma Como Entero
    
    Escribir "Ingrese un valor entero positivo: "
    Leer n
	
    Si n > 0 Entonces
        Para i = 1 Hasta n
            Si i MOD 2 <> 0 Entonces
                suma <- suma + i
            FinSi
        FinPara
		
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    Sino
        Escribir "Ingrese un valor entero positivo, reinicie."
	FinSi
FinProceso
