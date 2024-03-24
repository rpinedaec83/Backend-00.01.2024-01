const charIndex = (palabra, caracter) => {
    const indices = [];
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        }
    }

    if (indices.length === 0) {
        return "El carácter no se encuentra en la palabra.";
    } else {
        return indices;
    }
};

alert(charIndex("hello", "l"));
alert(charIndex("circumlocution", "c"));

