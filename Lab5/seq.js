'use strict'

function seq(args) {
    const functions = [args];

    function chain(next) {
        if (typeof next === 'number') {
            return functions.reduceRight((result, fn) => fn(result), next);
        }
        functions.push(next);
        return chain;
    }

return chain;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5))
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7))