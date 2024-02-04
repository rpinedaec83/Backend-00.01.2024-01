Proceso Ejercicio15
	Definir CM_A_PULGADAS, LIBRAS_A_KILOGRAMOS Como Real
    Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    CM_A_PULGADAS <- 0.393701
    LIBRAS_A_KILOGRAMOS <- 0.453592
	
    Escribir "Ingrese la longitud en centímetros: "
    Leer centimetros
    Escribir "Ingrese el peso en libras: "
    Leer libras
	
    pulgadas <- centimetros * CM_A_PULGADAS
    kilogramos <- libras * LIBRAS_A_KILOGRAMOS
	
    Escribir "Longitud en pulgadas: ", pulgadas
    Escribir "Peso en kilogramos: ", kilogramos
FinProceso
