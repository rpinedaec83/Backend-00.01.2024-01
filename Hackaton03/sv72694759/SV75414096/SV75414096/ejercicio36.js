let limite, a, b, c;

a = 0;
b = 1;

console.log("Ingrese el límite de la serie de Fibonacci: ");
limite = parseInt(prompt("Ingrese el límite de la serie de Fibonacci:"));

console.log(a);
console.log(b);

for (let i = 3; i <= limite; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}