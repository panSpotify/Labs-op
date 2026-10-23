'use strict'

function sum(...args) {
    let sum = 0;
    let i = 0;
    do {
        sum += args[i];
        i++;
    } while (i < args.length);
    return sum;
}

console.log(sum(0))
console.log(sum(1, 2, 3))