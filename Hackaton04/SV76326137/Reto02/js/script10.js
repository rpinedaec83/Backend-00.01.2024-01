const toArray = (objeto) => {
    return Object.entries(objeto);
};

alert(toArray({ a: 1, b: 2 }));
