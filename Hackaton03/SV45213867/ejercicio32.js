// Variables
let provincia, ciudad, poblacion, poblacionMaxima = 0, maxCiudad = 0, maxProvincia = 0;

for (provincia = 1; provincia <= 3; provincia++) {
    for (ciudad = 1; ciudad <= 11; ciudad++) {
        poblacion = Math.floor(Math.random() * 1000) + 1; // Genera un valor aleatorio entre 1 y 1000
        console.log("Ingrese la población de la ciudad " + ciudad + " en la provincia " + provincia + ": " + poblacion);

        if (poblacion > poblacionMaxima) {
            poblacionMaxima = poblacion;
            maxCiudad = ciudad;
            maxProvincia = provincia;
        }
    }
}

console.log("La ciudad con la población más alta tiene " + poblacionMaxima + " habitantes.");
console.log("Provincia: " + maxProvincia + ", Ciudad: " + maxCiudad);