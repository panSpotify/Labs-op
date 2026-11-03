'use strict'

function pipe(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('All arguments must be functions');
        }
    }

    return x => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => x + 1;
const double = x => x * 2;
const cube = x => x * x * x;

console.log(pipe(inc, double, cube)(5))
// console.log(pipe(inc, inc)(7))
// console.log(pipe(inc, 7, cube))