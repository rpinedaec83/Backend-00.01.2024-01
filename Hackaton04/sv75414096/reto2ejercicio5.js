function filtrarNoString(array) {
    return array.filter(valor => typeof valor === 'string');
}

const arrayOriginal = [1, 'dos', 3, 'cuatro', true, 'seis'];
const arrayFiltrado = filtrarNoString(arrayOriginal);
console.log(arrayFiltrado); // Output: ['dos', 'cuatro', 'seis']