function ejercicio1() {
  let n = prompt("Ingrese un número");
  n = parseInt(n);
  if (!isNaN(n) && n >= 100 && n <= 999) {
    console.log("El número ", n, " tiene tres dígitos.");
  } else {
    console.log("El número ", n, " no tiene tres dígitos.");
  }
}

function ejercicio2() {
  let n = prompt("Ingrese un número");
  n = parseInt(n);
  if (!isNaN(n) && n > 0) {
    console.log("El número ", n, " es positivo.");
  } else if (n === 0) {
    console.log("El número ", n, " es neutro.");
  } else {
    console.log("El número ", n, " es negativo.");
  }
}

function ejercicio3() {
  let n = prompt("Ingrese un número");
  n = parseInt(n);
  let ud;
  ud = n % 10;
  if (ud === 4) {
    console.log("El número ", n, " termina en 4.");
  } else {
    console.log("El número ", n, " no termina en 4.");
  }
}

function ejercicio4() {
  let n1 = parseInt(prompt("Ingrese el número 1:"));
  let n2 = parseInt(prompt("Ingrese el número 2:"));
  let n3 = parseInt(prompt("Ingrese el número 3:"));

  let t, s, p;

  if (n1 >= n2 && n1 >= n3) {
    p = n1;
    if (n2 >= n3) {
      s = n2;
      t = n3;
    } else {
      s = n3;
      t = n2;
    }
  } else if (n2 >= n1 && n2 >= n3) {
    p = n2;
    if (n1 >= n3) {
      s = n1;
      t = n3;
    } else {
      s = n3;
      t = n1;
    }
  } else {
    p = n3;
    if (n1 >= n2) {
      s = n1;
      t = n2;
    } else {
      s = n2;
      t = n1;
    }
  }
  console.log(t + " -> " + s + " -> " + p);
}

function ejercicio5() {
  let n = prompt("Ingrese un número de par de zapatos");
  n = parseInt(n);
  let desc = 0;
  v = n * 80;
  if (n > 0 && n <= 10) {
    desc = v * 0.1;
    console.log("Tienes un descuento del 10%");
  } else if (n >= 20 && n <= 30) {
    desc = v * 0.2;
    console.log("Tienes un descuento del 20%");
  } else {
    desc = v * 0.4;
    console.log("Tienes un descuento del 40%");
  }
  total = v - desc;
  console.log("EL valor de la compra es: $", v);
  console.log("El descuento es: $", desc);
  console.log("El total de la compra es: $", total);
}

function ejercicio6() {
  let n = prompt("Ingresar el número de horas trabajadas");
  n = parseInt(n);
  let p;

  if (!isNaN(n)) {
    if (n <= 40) {
      p = 20 * n;
    } else if (n > 40 && n <= 60) {
      let he = n - 40;
      p = 25 * he + 800;
      console.log("Número de horas extras: ", he);
    } else {
      console.log("No se puede ingresar más de 60 horas");
    }
    console.log("Sueldo semanal: $", p);
  } else {
    console.log("Por favor, ingrese un número válido de horas trabajadas.");
  }
}

function ejercicio7() {
  let n = prompt("Ingresar un monto");
  n = parseInt(n);
  let type = prompt("Ingrese un tipo de descuento: \n -> A, B o C");
  let desc = 0;
  type = type.toUpperCase();
  switch (type) {
    case "A":
      desc = n * 0.1;
      break;
    case "B":
      desc = n * 0.15;
      break;
    case "C":
      desc = n * 0.2;
      break;
    default:
      console.log("No es un tipo de descuento");
      break;
  }
  let h = n - desc;
  console.log("Precio Total: $", h);
}

function ejercicio8() {
  let n1 = parseInt(prompt("Ingresar nota #1:"));
  let n2 = parseInt(prompt("Ingresar nota #2:"));
  let n3 = parseInt(prompt("Ingresar nota #3:"));
  let p = 0;
  if (n1 > 20 || n1 < 0) {
    console.log("La nota 1 no puede ser negativa ni mayor a 20");
    return;
  }
  if (n2 > 20 || n2 < 0) {
    console.log("La nota 2 no puede ser negativa ni mayor a 20");
    return;
  }
  if (n3 > 20 || n3 < 0) {
    console.log("La nota 3 no puede ser negativa ni mayor a 20");
    return;
  }
  p = (n1 + n2 + n3) / 3;
  console.log("Promedio:", p);
  if (p >= 11.5) {
    console.log("El alumno está aprobado.");
  } else {
    console.log("El alumno está desaprobado.");
  }
}

function ejercicio9() {
  let n = prompt("Ingresar un sueldo");
  let a, s;
  n = parseInt(n);
  if (n > 2000) {
    a = n * 0.05;
  } else if (n <= 2000) {
    a = n * 0.1;
  }
  s = n + a;
  console.log("El aumento es $", a);
  console.log("Sueldo: $", s);
}

function ejercicio10() {
  let n = prompt("Ingresar un número");
  n = parseInt(n);
  if (n % 2 === 0) {
    console.log("El número ", n, " es par.");
  } else {
    console.log("El número ", n, " es impar.");
  }
}

function ejercicio11() {
  let n1 = prompt("Ingrese el número 1:"),
    n2 = prompt("Ingrese el número 2:"),
    n3 = prompt("Ingrese el número 3:");

  n1 = parseInt(n1);
  n2 = parseInt(n2);
  n3 = parseInt(n3);

  if (n1 > n2 && n1 > n3) {
    console.log("El número mayor es ", n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log("El número mayor es ", n2);
  } else {
    console.log("El número mayor es ", n3);
  }
}

function ejercicio12() {
  let n1 = prompt("Ingrese el número 1:"),
    n2 = prompt("Ingrese el número 2:");
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  let nm;
  if (n1 > n2) {
    nm = n1;
  } else {
    nm = n2;
  }
  console.log("El número ", nm, " es mayor");
}

function ejercicio13() {
  let lt = prompt("Ingrese una letra");
  lt = lt.toLowerCase();
  if (lt === "a" || lt === "e" || lt === "i" || lt === "o" || lt === "u") {
    console.log("Es una vocal.");
  } else {
    console.log("No es una vocal.");
  }
}

function ejercicio14() {
  let x = prompt("Ingrese un número");
  x = parseInt(x);

  for (let i = 2; i <= x; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      console.log("El número ", i, " es primo.");
    }
  }
}

function ejercicio15() {
  let tc = prompt(
    "Ingrese un tipo de conversión: \n(A) centímetros a pulgadas \n(B) libras a kilogramos"
  );
  tc = tc.toUpperCase();
  let n = prompt("Ingrese un número a convertir");
  n = parseFloat(n);
  switch (tc) {
    case "A":
      let pl = n / 2.54;
      console.log(
        "La conversión de ",
        n,
        " cm. a in. es ",
        pl.toFixed(2),
        " in."
      );
      break;
    case "B":
      let kg = n / 2.205;
      console.log(
        "La conversión de ",
        n,
        " lb. a kg. es ",
        kg.toFixed(2),
        " kg."
      );
      break;
    default:
      console.log("No es un tipo de conversión válido.");
      break;
  }
}

function ejercicio16() {
  let n = prompt("Ingrese un número del 1 al 7");
  n = parseInt(n);
  let day;
  switch (n) {
    case 1:
      day = "Lunes";
      break;
    case 2:
      day = "Martes";
      break;
    case 3:
      day = "Miércoles";
      break;
    case 4:
      day = "Jueves";
      break;
    case 5:
      day = "Viernes";
      break;
    case 6:
      day = "Sábado";
      break;
    case 7:
      day = "Domingo";
      break;

    default:
      console.log("Una semana solo tiene 7 días.");
      break;
  }
  console.log("Su día es: ", day);
}

function ejercicio17() {
  let h = prompt("Ingrese la hora en formato (24h)"),
    m = prompt("Ingrese los minutos"),
    s = prompt("Ingrese los segundos");
  h = parseInt(h);
  m = parseInt(m);
  s = parseInt(s);
  s = s + 1;
  if (s === 60) {
    s = 0;
    m++;
    if (m === 60) {
      m = 0;
      h++;
      if (h === 24) {
        h = 0;
      }
    }
  }
  console.log("La hora después de un segundo es: ", h, " : ", m, " : ", s);
}

function ejercicio18() {
  let n = prompt("Ingrese un número");
  n = parseInt(n);
  let pt, g;
  if (!isNaN(n)) {
    if (n <= 9) {
      pt = n * 10;
    } else if (n >= 10 && n <= 99) {
      pt = cant * 8;
    } else if (n >= 100 && n <= 499) {
      pt = n * 7;
    } else {
      pt = n * 6;
    }
  } else {
    console.log("Error: Ingrese un número valido.");
    return;
  }
  g = pt * 0.0825;
  console.log("Precio Total: $", pt);
  console.log("Ganancia: $", g);
}

function ejercicio19() {
  let n = prompt(
    "Ingrese el número identificador del empleado: \n(1)Cajero, (2)Servidor, (3)Preparador de mezclas, (4)Matenimiento"
  );
  n = parseInt(n);
  let dt = prompt("Ingrese la cantidad de días de trabajo");
  dt = parseInt(dt);
  let sy;
  if (dt <= 6) {
    switch (n) {
      case 1:
        sy = 56 * dt;
        break;
      case 2:
        sy = 64 * dt;
        break;
      case 3:
        sy = 80 * dt;
        break;
      case 4:
        sy = 48 * dt;
        break;
      default:
        console.log("No es un número identificador válido.");
        break;
    }
    console.log("Pago: $", sy);
  } else {
    console.log(
      'Escribir "Cantidad de días no válidas. Ingrese un valor menor o igual a 6'
    );
  }
}

function ejercicio20() {
  let n1 = prompt("Ingrese el #01");
  let n2 = prompt("Ingrese el #02");
  let n3 = prompt("Ingrese el #03");
  let n4 = prompt("Ingrese el #04");
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  n3 = parseInt(n3);
  n4 = parseInt(n4);
  let res,
    nmay,
    pr = 0;
  if (n1 % 2 === 0) pr++;
  if (n2 % 2 === 0) pr++;
  if (n3 % 2 === 0) pr++;
  if (n4 % 2 === 0) pr++;
  console.log("Nº de pares: ", pr, ".");

  nmay = n1;
  if (n2 > nmay) nmay = n2;
  if (n3 > nmay) nmay = n3;
  if (n4 > nmay) nmay = n4;
  console.log("El número mayor es: ", nmay);

  if (n3 % 2 === 0) {
    res = n2 ** 2;
    console.log("El cuadrado del segundo es ", res, ".");
  } else if (n1 < n4) {
    res = (n1 + n2 + n3 + n4) / 4;
    console.log("La medida de los 4 números es ", res, ".");
  } else if (n2 > n3) {
    if (n3 > 50 && n3 < 700) {
      res = n1 + n2 + n3 + n4;
      console.log("La suma de los 4 números es ", res, ".");
    }
  }
}

function ejercicio21() {
  let n = prompt("Ingrese un número");
  n = parseInt(n);
  let fl;
  if (n > 0) {
    fl = 1;
    for (let i = 1; i <= n; i++) {
      fl *= i;
    }
  }
  console.log("El fatorial de ", n, " es ", fl, ".");
}

function ejercicio22() {
  let n = prompt("Ingresar un número");
  n = parseInt(n);
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    sum += x;
  }
  console.log("La suma de los ", n, " primeros números es ", sum, ".");
}

function ejercicio23() {
  let n = prompt("Ingresar un número");
  n = parseInt(n);
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    if (x % 2 !== 0) {
      sum += x;
    }
  }
  console.log(
    "La suma de números impares menores o iguales a ",
    n,
    " es ",
    sum,
    "."
  );
}

function ejercicio24() {
  let sum = 0;
  for (let x = 1; x <= 1000; x++) {
    if (x % 2 === 0) {
      sum += x;
    }
  }
  console.log("La suma de todos los números pares hasta el 1000 es ", sum, ".");
}

function ejercicio25() {
  let n1 = prompt("Ingrese el #01");
  let n2 = prompt("Ingrese el #02");
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if (n1 > 1) {
    while (n1 !== 0) {
      n2 *= n1;
      n1--;
    }
  }
  console.log("El factorial es ", n2, ".");
}

function ejercicio26() {
  let coct = 0;
  let ddo = prompt("Ingresa un dividendo");
  ddo = parseInt(ddo);
  let dsr = prompt("Ingresa un divisor");
  dsr = parseInt(dsr);
  while (ddo >= dsr) {
    coct++;
    ddo -= dsr;
  }
  let rest = ddo;
  console.log("Resto: ", rest, ".");
  console.log("Cociente: ", coct, ".");
}

function ejercicio27() {
  let n = prompt("Ingresar un número");
  n = parseInt(n);
  let sum = 0;
  let res = 0;
  if (n >= 0) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    res = sum / n;
    console.log("La media es: ", res, ".");
  } else {
    console.log("Programa Terminado...");
  }
}

function ejercicio28() {
  let sum = 0;
  let cont = 1;
  do {
    sum += cont;
    cont++;
  } while (cont <= 100);
  console.log(
    "La suma de los primeros cien números con bucle do-while es: ",
    sum
  );
}

function ejercicio29() {
  let sum = 0;
  let cont = 0;
  while (cont <= 100) {
    sum += cont;
    cont++;
  }
  console.log(
    "La suma de los primeros cien números con el ciclo while es: ",
    sum
  );
}

function ejercicio30() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(
    "La suma de los primeros cien números con el ciclo for es: ",
    sum
  );
}

function ejercicio31() {
  let sum_p = 0;
  let sum_i = 0;
  let cont_p = 0;
  let cont_i = 0;

  for (let i = 0; i < 10; i++) {
    let n = parseInt(prompt("Ingrese un número:"));

    if (n % 2 === 0) {
      sum_p += n;
      cont_p++;
    } else {
      sum_i += n;
      cont_i++;
    }
  }

  let md_p = cont_p > 0 ? sum_p / cont_p : 0;
  let md_i = cont_i > 0 ? sum_i / cont_i : 0;

  console.log("Media de números pares:", md_p.toFixed(2));
  console.log("Media de números impares:", md_i.toFixed(2));
}

function ejercicio32() {
  let p_max = 0;
  let max_ciu = 0;
  let max_prov = 0;
  for (let prov = 1; prov <= 3; prov++) {
    for (let ciud = 1; ciud <= 11; ciud++) {
      let pob = Math.floor(Math.random() * 1000) + 1;
      if (pob > p_max) {
        p_max = pob;
        max_ciu = ciud;
        max_prov = prov;
      }
    }
  }
  console.log(
    "La ciudad con la población más alta tiene ",
    p_max,
    " habitantes."
  );
  console.log("Provincia: ", max_prov, ".");
  console.log("Ciudad: ", max_ciu, ".");
}

function ejercicio33() {
  let n;
  do {
    n = prompt("Desea continuar con el programa? (si/no)").toLowerCase();
  } while (n === "si");
  if (n === "no") {
    console.log("Programa terminado.");
  }
}

function ejercicio34() {
  let n = prompt("Ingresar un número");
  n = parseInt(n);
  let tm;
  let cont = 0;
  if (n > 0 && n <= 9) {
    for (let x = 1; x <= 9; x++) {
      cont++;
      tm = n * x;
      console.log(n, " X ", x, " = ", tm);
    }
  } else {
    console.log("Solo se permite un número del 1 al 9");
  }
}

function ejercicio35() {
  let n = prompt("Ingrese la cantidad de números a ingresar");
  n = parseInt(n);
  let i = 1;
  let x;
  let may = -Infinity;
  let men = Infinity;
  if (n <= 20) {
    while (i <= n) {
      x = parseInt(prompt("Ingrese el número ", i));
      if (!isNaN(x)) {
        if (x > may) {
          may = x;
        }
        if (x < men) {
          men = x;
        }
        i++;
      } else {
        console.log("Ingrese un número válido");
      }
    }
  } else {
    console.log("Solo puede ingresar 20 números como máximo");
  }

  console.log("El número mayor es: ", may);
  console.log("El número menor es: ", men);
}

function ejercicio36() {
  let n = prompt("Ingrese un número de elementos de la serie Fibonacci");
  n = parseInt(n);
  let a = 0;
  let b = 1;
  let c;
  for (let x = 1; x <= n; x++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}

function ejercicio37() {
  let n1 = prompt("Ingrese el primer número");
  n1 = parseInt(n1);
  let n2 = prompt("Ingrese el segundo número");
  n2 = parseInt(n2);
  let rest;
  while (n2 !== 0) {
    rest = n1 % n2;
    n1 = n2;
    n2 = rest;
  }
  let mcd = n1;
  console.log("M.C.D.: ", mcd);
}

function ejercicio38() {
  let n = prompt("Ingrese un número");
  n = parseInt(n);
  let sum_d = 0;
  for (let dsr = 1; dsr <= n / 2; dsr++) {
    if (n % dsr === 0) {
      sum_d += dsr;
    }
  }
  if (sum_d === n && sum_d !== 0) {
    console.log(n, " es un número perfecto.");
  } else {
    console.log(n, " es un número imperfecto.");
  }
}

function ejercicio39() {
  let n = prompt("Ingrese un número de términos");
  n = parseInt(n);
  let pi = 0;
  for (let i = 0; i < n; i++) {
    let der = 2 * i + 1;
    if (i % 2 === 0) {
      pi += 4 / der;
    } else {
      pi -= 4 / der;
    }
  }
  console.log("Aproximación de Pi con la serie de Gregory-Leibniz:", pi);
}

function ejercicio40() {
  let n = prompt("Ingrese un número de términos");
  n = parseInt(n);
  let pi = 3;
  let der = 2;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      pi += 4 / (der * (der + 1) * (der + 2));
    } else {
      pi -= 4 / (der * (der + 1) * (der + 2));
    }
    der += 2;
  }
  console.log("Aproximación de Pi con la serie de Nilakantha:", pi);
}
