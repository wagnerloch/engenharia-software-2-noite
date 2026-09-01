
for (let i = 0; i < 50; i++) {
    console.log(`Iteration ${i}`);
}

function greet(name) {
    return `Oi ${name}, tudo bem com você?`;
}

console.log(greet("Wagner"));

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

for (let i = 0; i < 10; i++) {
    console.log(`Square of ${i} is ${i * i}`);
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
