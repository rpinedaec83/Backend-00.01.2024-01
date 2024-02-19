function obtenerTipo(valor) {
    return typeof valor;
}

console.log(obtenerTipo(5)); // "number"
console.log(obtenerTipo("Hola")); // "string"
console.log(obtenerTipo(true)); // "boolean"
console.log(obtenerTipo(null)); // "object"
console.log(obtenerTipo(undefined)); // "undefined"
console.log(obtenerTipo({})); // "object"
console.log(obtenerTipo([])); // "object"
console.log(obtenerTipo(function() {})); // "function"