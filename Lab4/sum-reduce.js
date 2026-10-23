'use strict'

function sum(...args) {
  return args.reduce((result, number) => result + number, 0);
}

console.log(sum(1, 2, 3))
console.log(sum(10, -1, -1, -1))