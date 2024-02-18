/*//9.	Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//      se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%,
//      si generaba menos de $2000 su aumento será de un 10%.



Proceso ejercicio_09

	// Variables
    Definir salarioActual, nuevoSalario Como Real
	
    // Entrada de datos
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
	
    // Determinar el aumento según el salario actual
    Si salarioActual > 2000 Entonces
        // Aumento del 5% si el salario es mayor a $2000
        nuevoSalario <- salarioActual + salarioActual * 0.05
    Sino
        // Aumento del 10% si el salario es menor o igual a $2000
        nuevoSalario <- salarioActual + salarioActual * 0.1
    FinSi
	
    // Mostrar resultados
    Escribir "Salario actual:", salarioActual
    Escribir "Nuevo salario con aumento:", nuevoSalario
FinProceso*/

// Variables
let salarioActual, nuevoSalario;

// Entrada de datos
salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

// Determinar el aumento según el salario actual
if (salarioActual > 2000) {
    // Aumento del 5% si el salario es mayor a $2000
    nuevoSalario = salarioActual + salarioActual * 0.05;
} else {
    // Aumento del 10% si el salario es menor o igual a $2000
    nuevoSalario = salarioActual + salarioActual * 0.1;
}

// Mostrar resultados
console.log("Salario actual:", salarioActual);
console.log("Nuevo salario con aumento:", nuevoSalario);