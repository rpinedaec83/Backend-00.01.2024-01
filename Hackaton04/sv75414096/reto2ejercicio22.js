function capLast(str) {
    const words = str.split(" ");

    const capitalizedWords = words.map(word => {
        const lastLetter = word.slice(-1).toUpperCase();
        return word.slice(0, -1) + lastLetter;
    });

    return capitalizedWords.join(" ");
}

console.log(capLast("hello")); // Output: "hellO"