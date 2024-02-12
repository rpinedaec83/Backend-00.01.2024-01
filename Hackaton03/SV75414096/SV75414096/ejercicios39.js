let n, piAproximado;

console.log("Ingrese el número de términos para la aproximación de pi: ");
n = parseInt(prompt("Ingrese el número de términos para la aproximación de pi: "));
piAproximado = 0;

// utilizando la serie de Gregory-Leibniz
for (let i = 0; i < n; i++) {
    piAproximado += Math.pow(-1, i) * (4 / (2 * i + 1));
}

console.log("La aproximación de pi con", n, "términos es:", piAproximado);