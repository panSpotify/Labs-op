'use strict'

function avarage(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {
    let result = [];
    for (let x = 0; x < 10; x++) {
        result.push(avarage(square(x), cube(x)));
    }
    return result;
}

console.log(calculate());