Proceso Ejercicio14
	Definir numero, i, contador Como Entero
    contador <- 0
	
    Escribir "Ingrese un número entre 1 y 10: "
    Leer numero
	
    Si numero >= 1 Y numero <= 10 Entonces
        Para i <- 1 Hasta numero Hacer
            Si numero % i = 0 Entonces
                contador <- contador + 1
            FinSi
        FinPara
		
        Si contador = 2 Entonces
            Escribir "El número ", numero, " es primo."
        Sino
            Escribir "El número ", numero, " no es primo."
        FinSi
    Sino
        Escribir "Número fuera del rango permitido o igual a 9."
    FinSi
FinProceso
