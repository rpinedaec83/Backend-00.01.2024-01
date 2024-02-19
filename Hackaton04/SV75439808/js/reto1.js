const e1   = (a, b) => a + b,
      res1 = e1(2, 3);
console.log(res1);  //5

const e2   = (a, b) => a ** b,
      res2 = e2(2, 3);
console.log(res2);  //8

const e3   = (a, b, c) => a ** 3 + b ** 3 + c ** 3,
      res3 = e3(1, 5, 9);
console.log(res3);  //855

const e4   = (b, h) => (b * h) / 2,
      res4 = e4(3, 4);
console.log(res4);  //6

const e5 = (a, b, c) => {
  const op = {
    "+": (a, c) => a + c,
    "-": (a, c) => a - c,
    "*": (a, c) => a * c,
    "/": (a, c) => a / c,
    "%": (a, c) => a % c,
  };
  return op[b] ? op[b](a, c): "El parámetro no es reconocido";
};
const res5 = e5(2, "+", 2);
console.log(res5);  //4

  //¿Cómo defines una función?
console.log(
  "Existen 3 formas de definir una función: \n1. Declaración: fn x (a, b) {} \n2. Expresión: const x = fn y () {} \n3. Flecha: const x = () => {}"
);

  //¿Hasta cuantos argumentos puedes declarar en una función?
console.log("Se puede declarar hasta n argumentos en una función.");
