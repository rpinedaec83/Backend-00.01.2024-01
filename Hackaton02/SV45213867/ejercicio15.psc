//15.	Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos
Proceso ejercicio_15
	// Constantes de conversión
    PulgadasPorCentimetro <- 0.393701
    KilogramosPorLibra <- 0.453592
	
    // Variables
    Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    // Entrada de datos
    Escribir "Ingrese la longitud en centímetros:"
    Leer centimetros
	
    Escribir "Ingrese el peso en libras:"
    Leer libras
	
    // Conversión de centímetros a pulgadas
    pulgadas <- centimetros * PulgadasPorCentimetro
	
    // Conversión de libras a kilogramos
    kilogramos <- libras * KilogramosPorLibra
	
    // Mostrar resultados
    Escribir "Longitud en pulgadas:", pulgadas
    Escribir "Peso en kilogramos:", kilogramos
FinProceso
