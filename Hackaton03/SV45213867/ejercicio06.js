
/*//6.	Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l
//      ser� su salario semanal, se sabe que si trabaja 40 horas o menos, se le
//      pagar� $20 por hora, pero si trabaja m�s de 40 horas entonces las horas 
//      extras se le pagar�n a $25 por hora.

Proceso ejercicio_06
		// Variables
		Definir horasTrabajadas Como Entero
		Definir salarioBase, salarioTotal Como Real
		// Entrada de datos
		Escribir "Ingrese las horas trabajadas en la semana:"
		Leer horasTrabajadas
		
		// Calcular salario base
		Si horasTrabajadas <= 40 Entonces
			salarioBase <- horasTrabajadas * 20  // $20 por hora
		Sino
			// Calcular salario con horas extras
			salarioBase <- 40 * 20 + (horasTrabajadas - 40) * 25  // Primeras 40 horas a $20, horas extras a $25
		FinSi
		
		// Mostrar resultados
		Escribir "Horas trabajadas:", horasTrabajadas
		Escribir "Salario base:", salarioBase
		

FinProceso */

// Variables
let horasTrabajadas;
let salarioBase, salarioTotal;

// Entrada de datos
horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));

// Calcular salario base
if (horasTrabajadas <= 40) {
    salarioBase = horasTrabajadas * 20;  // $20 por hora
} else {
    // Calcular salario con horas extras
    salarioBase = 40 * 20 + (horasTrabajadas - 40) * 25;  // Primeras 40 horas a $20, horas extras a $25
}

// Mostrar resultados
console.log("Horas trabajadas:", horasTrabajadas);
console.log("Salario base:", salarioBase);
