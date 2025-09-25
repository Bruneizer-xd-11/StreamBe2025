function fizzBuzz2(limit, fizz_num, buzz_num) {
    let result = [];
    for (let i = 1; i <= limit; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
            result.push("FizzBuzz");
        } else if (i % fizz_num === 0) {
            result.push("Fizz");
        } else if (i % buzz_num === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result.join(",");
}

// Ejemplo de uso:
console.log(fizzBuzz2(20, 3, 5)); // Cuenta hasta 20, usando 3 y 5 como múltiplos