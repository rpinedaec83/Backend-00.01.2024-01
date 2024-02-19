function formatPhoneNumber(array) {
    const phoneNumber = `(${array.slice(0, 3).join('')}) ${array.slice(3, 6).join('')}-${array.slice(6).join('')}`;
    return phoneNumber;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numeroTelefono = formatPhoneNumber(numeros);
console.log(numeroTelefono); // Output: "(123) 456-7890"