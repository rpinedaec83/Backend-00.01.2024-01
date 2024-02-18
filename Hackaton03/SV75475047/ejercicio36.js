function ejercicio36(params) {
    function fibonacci(n) {
        let fibonacciArray = [0, 1]; 
 
        for (let i = 2; i <= n; i++) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
    
        return fibonacciArray;
    }
    
    let n = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci que desea generar:"));
    let serieFibonacci = fibonacci(n);
    console.log("La serie de Fibonacci con " + n + " términos es: " + serieFibonacci.join(', '));
    
}