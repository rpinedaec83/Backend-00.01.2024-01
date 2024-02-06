Proceso Pregunta_40
	definir termino, limite Como real
	
    escribir "Ingrese la cantidad de términos :"
    leer limite
	
    valor = 3
	
    Para n = 1 Hasta limite Hacer
        termino = 4 / (2 * n * (2 * n + 1) * (2 * n + 2))
        Si n % 2 = 0 Entonces
            valor = valor - termino
        Sino
            valor = valor + termino
        FinSi
    FinPara
	
    Escribir "La aproximación de Pi con la serie de Nilakantha es: " valor
FinProceso
