Proceso Ejercicio14
	Definir numero, i Como Entero
    Definir esPrimo Como Logico
	
    Escribir "Ingrese un número entre 1 y 10: "
    Leer numero
	
    esPrimo <- Verdadero
	
    Si numero < 2 O numero > 10 Entonces
        Escribir "El número no está en el rango especificado."
    Sino
        Para i Desde 2 Hasta numero / 2 Hacer
            Si numero Mod i = 0 Entonces
                esPrimo <- Falso
            
            FinSi
        FinPara
		
        Si esPrimo Entonces
            Escribir "El número ", numero, " es un número primo."
        Sino
            Escribir "El número ", numero, " no es un número primo."
        FinSi
    FinSi
	
	
FinProceso
