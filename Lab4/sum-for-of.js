'use strict'

function sum(...args) {
    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
}

console.log(sum(1, 2, 3))
console.log(sum(1, -1, 1))