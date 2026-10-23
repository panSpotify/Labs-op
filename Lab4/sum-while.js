'use strict'

function sum(...args) {
  let sum = 0;
    let i = 0;
    while (i < args.length) {
        sum += args[i];
        i++;
    }
    return sum;
}

console.log(sum(1, -1, 1))
console.log(sum())