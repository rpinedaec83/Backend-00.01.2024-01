function countdown(number) {
    let result = [];
    for (let i = number; i >= 0; i--) {
        result.push(i);
    }
    return result;
}

console.log(countdown(5)); // Output: [5, 4, 3, 2, 1, 0]