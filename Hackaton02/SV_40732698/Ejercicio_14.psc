Proceso Reconocimiento_Num_primo
	Definir numero, i, contador Como Entero
	
    Escribir "Ingrese un número del 1 al 10 (excluyendo el 9): "
    Leer numero
	
    Si numero >= 1 Y numero <= 10 Y numero <> 9 Entonces
        contador = 0
        Para i = 1 Hasta numero
            Si numero MOD i = 0 Entonces
                contador = contador + 1
            FinSi
        FinPara
		
        Si contador = 2 Entonces
            Escribir "El número ingresado es primo"
        Sino
            Escribir "El número ingresado no es primo"
        FinSi
		Sino
        Escribir "Número no valido"
    FinSi
FinProceso
