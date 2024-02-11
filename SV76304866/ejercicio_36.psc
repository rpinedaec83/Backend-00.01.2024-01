//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Algoritmo ejercicio_36

    Definir limite, primerNumero, segundoNumero, siguienteNumero, i Como Entero
	
    Escribir 'Ingrese el límite de la serie de Fibonacci: '
    Leer limite

    primerNumero = 0
    segundoNumero = 1

    Escribir primerNumero
    Escribir segundoNumero

    Para i = 3 Hasta limite Hacer
        siguienteNumero = primerNumero + segundoNumero
        Escribir siguienteNumero

        primerNumero = segundoNumero
        segundoNumero = siguienteNumero
    FinPara
	
FinAlgoritmo

