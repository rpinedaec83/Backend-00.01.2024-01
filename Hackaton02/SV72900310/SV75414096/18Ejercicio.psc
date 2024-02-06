Algoritmo sin_titulo
									// Definir constantes
									precio_1_a_9 = 10
									precio_10_a_99 = 8
									precio_100_a_499 = 7
									precio_mas_500 = 6
									ganancia_porcentaje = 8.25 / 100
									
									
									Definir cantidad_cds Como Entero
									Definir precio_total, ganancia_vendedor Como Real
									
									
									Escribir "Ingrese la cantidad de CDs a vender: "
									Leer cantidad_cds
									
									
									Si cantidad_cds >= 1 Y cantidad_cds <= 9 Entonces
										precio_total = cantidad_cds * precio_1_a_9
									Sino
										Si cantidad_cds >= 10 Y cantidad_cds <= 99 Entonces
											precio_total = cantidad_cds * precio_10_a_99
										Sino
											Si cantidad_cds >= 100 Y cantidad_cds <= 499 Entonces
												precio_total = cantidad_cds * precio_100_a_499
											Sino
												Si cantidad_cds >= 500 Entonces
													precio_total =cantidad_cds * precio_mas_500
												FinSi
											FinSi
										FinSi
									FinSi
									
									
									ganancia_vendedor = precio_total * ganancia_porcentaje
									
									
									Escribir "Precio total para el cliente: $", precio_total
									Escribir "Ganancia para el vendedor: $", ganancia_vendedor

FinAlgoritmo
