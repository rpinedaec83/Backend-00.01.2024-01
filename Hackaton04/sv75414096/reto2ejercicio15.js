function multiplyByLength(arr) {
    let multipliedArray = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        multipliedArray.push(arr[i] * length); 
    }
    return multipliedArray;
}

console.log(multiplyByLength([2, 3, 1, 0])); // Output: [8, 12, 4, 0]