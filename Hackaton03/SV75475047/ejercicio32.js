function ejercicio32(params) {
    function ciudadConMayorPoblacion() {
        let provincias = ["Provincia 1", "Provincia 2", "Provincia 3"];
        let ciudades = ["Ciudad 1", "Ciudad 2", "Ciudad 3", "Ciudad 4", "Ciudad 5", "Ciudad 6", "Ciudad 7", "Ciudad 8", "Ciudad 9", "Ciudad 10", "Ciudad 11"];
        let poblacionMayor = 0;
        let ciudadMayor = "";

        for (let i = 0; i < provincias.length; i++) {
            for (let j = 0; j < ciudades.length; j++) {
                let poblacion = parseInt(prompt("Ingrese la población de " + ciudades[j] + " en " + provincias[i] + ":"));
                if (poblacion > poblacionMayor) {
                    poblacionMayor = poblacion;
                    ciudadMayor = ciudades[j] + " en " + provincias[i];
                }
            }
        }

        return ciudadMayor;
    }

    let ciudadMayor = ciudadConMayorPoblacion();
    console.log("La ciudad con la población más grande es: " + ciudadMayor);

}