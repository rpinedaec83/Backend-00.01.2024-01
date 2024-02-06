// Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso ejercicio_36
	Definir n, i, terminoActual, terminoAnterior, resultado Como Entero
	
    Escribir "Ingrese la cantidad de términos para la serie de Fibonacci: "
    Leer n
	
    terminoAnterior = 0
    terminoActual = 1
	
    Escribir " Serie de Fibonacci: "
    Escribir terminoAnterior 
    Escribir terminoActual
	
    Para i = 3 Hasta n Con Paso 1 Hacer
        resultado = terminoAnterior + terminoActual
        Escribir resultado
        terminoAnterior = terminoActual
        terminoActual = resultado
    FinPara

	
FinProceso
