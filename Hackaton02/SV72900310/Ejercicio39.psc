// 39. Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...


Proceso Ejercicio39
    Definir n, decimales Como Entero
    Definir numeropi, termino, factorRedondeo Como Real
	
    Escribir "Ingrese el numero de terminos para la aproximacion de pi: "
    Leer n
    Escribir "Ingrese la cantidad de decimales para la aproximacion de pi (maximo 8 decimales): "
    Leer decimales
	
    numeropi = 0
	
    Para i = 0 Hasta n-1 Hacer
        termino = 4 / (2 * i + 1)
        Si i % 2 = 0 Entonces
            numeropi = numeropi + termino
        Sino
            numeropi = numeropi - termino
        FinSi
    FinPara
	
    factorRedondeo = 10 ^ decimales
	
    numeropi = Redon(numeropi * factorRedondeo) / factorRedondeo
	
    Escribir "La aproximacion de pi con ", n, " terminos y ", decimales, " decimales es: ", numeropi
	
FinProceso