//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, 
//hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
Algoritmo ejercicio_32

    Definir ciudadMayorPoblacion Como Cadena
    Definir poblacion, mayorPoblacion, provincia, ciudad Como Entero

    mayorPoblacion = 0

    Para provincia = 1 Hasta 3 Hacer

        Para ciudad = 1 Hasta 11 Hacer
 
            Escribir 'Ingrese la población de la ciudad ', ciudad, ' en la provincia ', provincia, ':'
            Leer poblacion

            Si poblacion > mayorPoblacion Entonces
                mayorPoblacion = poblacion
                ciudadMayorPoblacion = 'Ciudad ' + ConvertirATexto(ciudad) + ' (Provincia ' + ConvertirATexto(provincia) + ')'
            FinSi
        FinPara
    FinPara

    Escribir 'La ciudad con la mayor población es: ', ciudadMayorPoblacion, ' con una población de ', mayorPoblacion
	
FinAlgoritmo


