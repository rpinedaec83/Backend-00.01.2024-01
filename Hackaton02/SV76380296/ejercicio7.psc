Proceso ejercicio7
	
	Definir sabor,bolas,precio,descuento,membresia Como Entero;
	sabornombre = "sabor";
	
	Escribir "Bienvenido a la tienda de helados. Eliga su sabor de helado";
	Repetir
		Escribir "1 (5$) para VAINILLA, 2 (6$) para FRESA, 3 (7$) para CHOCOLATE.";
		Leer sabor;
		Si sabor < 0 o sabor >= 4 Entonces;
			Escribir "Eligio un valor incorrecto, vuelva a intentarlo.";
		FinSi
	Hasta Que sabor > 0 y sabor < 4
	
	Segun sabor
		1:
			sabornombre = "vainilla";
			precio = 5;
		2:
			sabornombre = "fresa";
			precio = 6;
		De Otro Modo:
			sabornombre = "chocolate";
			precio = 7;
	FinSegun
	
	Repetir
		Escribir "Ahora, eliga la cantidad de bolas de helado. Maximo 4 bolas.";
		Leer bolas;
		Si bolas < 0 o bolas >= 5
			Escribir "Eligio un valor incorrecto, vuelva a intentarlo.";
		FinSi
	Hasta Que bolas > 0 y bolas < 5
	
	preciofinal = precio*bolas;
	
	Escribir "Eligio " bolas " bola(s) del sabor " sabornombre ". Su precio total es de " preciofinal "$.";
	Escribir "Cuenta con una membresia? Ingrese 1 (A), 2 (B), o 3 (C) para el tipo de membresia. Ingrese 0 si no cuenta con una membresia.";
	Leer membresia;
	
	Segun membresia Hacer
		0:
			Escribir "No cuenta con membresia.";
		1:
			descuento = 10;
			Escribir "Es de la membresia A.";
		2:
			descuento = 15;
			Escribir "Es de la membresia B.";
		3:
			descuento = 20;
			Escribir "Es de la membresia C.";
		De Otro Modo:
			Escribir "Ha ingresado un valor incorrecto, se considerara que no cuenta con membresia.";
	FinSegun
	
	preciodescuento = precio*bolas*(100-descuento)/100;
	
	Escribir "Su precio final, aplicando descuento, es de " preciodescuento "$.";
FinProceso

//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía 
//dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento