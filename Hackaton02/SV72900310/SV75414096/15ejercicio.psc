Algoritmo sin_titulo
	cm_a_pulgadas = 0.393701
    libras_a_kg = 0.453592
	
    Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    Escribir "Ingrese la longitud en centímetros: "
    Leer centimetros
	
    Escribir "Ingrese el peso en libras: "
    Leer libras
	//conversion
    pulgadas = centimetros * cm_a_pulgadas
    kilogramos = libras * libras_a_kg
	
    // Mostrar los resultados
    Escribir "Longitud en pulgadas: ", pulgadas
    Escribir "Peso en kilogramos: ", kilogramos
	
FinAlgoritmo
