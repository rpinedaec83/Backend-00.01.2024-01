function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}


console.log(charIndex("hello", "l")); // Output: [2, 3]
console.log(charIndex("circumlocution", "c")); // Output: [0, 8]