Proceso  EJERCICIO_19
	Definir ID, cantidad, pago Como Real
	Definir respuesta Como Caracter
    Repetir
		Escribir "Cajero ID: 1, Servidor ID: 2, Preparador de mezcla ID: 3, Mantenimiento ID: 4"
		
		Repetir // Validación de ID
			Escribir "Ingrese el ID:"
			Leer ID
			Si ID <> 1 Y ID <> 2 Y ID <> 3 Y ID <> 4 Entonces
				Escribir "El identificador solo puede ser (1,2,3,4), intentelo nuevamente."
			SiNo
				Repetir
					Escribir "Ingrese el numero de dias trabajados:"
					Leer cantidad
					Si cantidad < 0 O cantidad > 6 O TRUNC(cantidad) <> cantidad Entonces
						Escribir "Debe ser un entero no negativo de máximo valor 6. Intentelo nuevamente."
					FinSi
				Hasta Que cantidad >= 0 Y cantidad <= 6 Y TRUNC(cantidad) = cantidad
			FinSi
		Hasta Que ID = 1 O ID = 2 O ID = 3 O ID = 4
		
		Segun ID Hacer
			1:
				pago = cantidad * 56
				Escribir "El cajero recibira un pago de: $ ", pago
			2:
				pago = cantidad * 64
				Escribir "El servidor recibira un pago de: $ ", pago
			3:
				pago = cantidad * 80
				Escribir "El preparador de mezclas recibira un pago de: $ ", pago
			De Otro Modo:
				pago = cantidad * 48
				Escribir "El de mantenimiento recibira un pago de: $ ", pago
		Fin Segun
		
		Repetir	// Validación de respuesta ingresada
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso