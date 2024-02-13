const poblaciones = {
    "Lima": 9699700,
    "Arequipa": 1135754,
    "Trujillo": 1032214,
    "Chiclayo": 738749,
    "Huancayo": 523803,
    "Piura": 482712,
    "Cajamarca": 371255,
    "Cusco": 428450,
    "Iquitos": 471993,
    "Chimbote": 388893,
    "Tacna": 366768
};

let ciudadMasPoblada = "";
let maxPoblacion = 0;

for (const ciudad in poblaciones) {
    if (poblaciones[ciudad] > maxPoblacion) {
        ciudadMasPoblada = ciudad;
        maxPoblacion = poblaciones[ciudad];
    }
}

console.log(`La ciudad con la población más alta es ${ciudadMasPoblada} con una población de ${maxPoblacion} habitantes.`);
