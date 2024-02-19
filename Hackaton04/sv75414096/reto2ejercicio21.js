function findNemo(sentence) {
    const words = sentence.split(" ");
    
    const nemoIndex = words.findIndex(word => word === "Nemo");

    if (nemoIndex !== -1) {
        return `I found Nemo at ${nemoIndex + 1}!`; 
    } else {
        return "¡No se encontró a Nemo!";
    }
}

console.log(findNemo("I am finding Nemo !")); // Output: "I found Nemo at 4!"