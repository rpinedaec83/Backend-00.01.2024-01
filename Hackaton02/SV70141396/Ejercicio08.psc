// Hacer un algoritmo en Pseint para determinar el aumento de un trabajador,
// se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%,
// si generaba menos de $2000 su aumento será de un 10%.

Proceso ejercicio_08
	Definir sueldo Como Real
	Escribir " Ingrese el sueldo "
	Leer sueldo
	
	Si sueldo > 2000 Entonces
		Escribir " Tendrá un aumento del 5% "
	SiNo
		Escribir " Tendrá un aumento del 10% "
	FinSi
	
FinProceso
