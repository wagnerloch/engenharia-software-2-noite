
for (let i = 0; i < 50; i++) {
    console.log(`Iteration ${i}`);
}

function greet(name) {
    return `Hello, ${name}!`;
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