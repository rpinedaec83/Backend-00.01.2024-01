//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Algoritmo ejercicio_39

    Definir n Como Entero
    Definir aproximacion_pi, termino Como Real

    Escribir 'Ingrese la cantidad de términos para la aproximación de pi: '
    Leer n

    aproximacion_pi = 0
	

    Para i = 0 Hasta n - 1 Hacer

        termino = 4 / (1 + 2 * i)

        Si i Mod 2 = 0 Entonces
            aproximacion_pi = aproximacion_pi + termino
        SiNo
            aproximacion_pi = aproximacion_pi - termino
        FinSi
    FinPara

    Escribir 'La aproximación de pi con ', n, ' términos es: ', aproximacion_pi
	
FinAlgoritmo


