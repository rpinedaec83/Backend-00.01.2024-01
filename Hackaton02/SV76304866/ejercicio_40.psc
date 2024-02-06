//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de 
//Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
Algoritmo ejercicio_40

    Definir n Como Entero
    Definir aproximacionPi, denominador Como Real
	
    Escribir 'Ingrese la cantidad de términos para la aproximación de pi: '
    Leer n

    aproximacionPi = 3

    denominador = 2

    Para i = 1 Hasta n Hacer

        aproximacionPi = aproximacionPi + 4 / (denominador * (denominador + 1) * (denominador + 2))

        Si i Mod 2 = 0 Entonces
            denominador = denominador + 2
        SiNo
            denominador = denominador + 4
        FinSi
    FinPara

    Escribir 'La aproximación de pi con ', n, ' términos es: ', aproximacionPi
	
FinAlgoritmo
