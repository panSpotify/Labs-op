'use strict'

function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            const typeName = types[i].name.toLowerCase();
            if (typeof args[i] !== typeName) {
                throw new TypeError(`Argument ${i + 1} must be of type ${typeName}`);
            }
        }
       
        const result = fn(...args);
        const returnTypeName = types[types.length - 1].name.toLowerCase();
        if (typeof result !== returnTypeName) {
            throw new TypeError(`Return value must be of type ${returnTypeName}`);
        }
        return result;
    };
}

module.exports = contract;

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2, s3) => s1 + s2 + s3;
const concatStrings = contract(concat, String, String, String, String);
const res1 = concatStrings('Go, ', 'Johny, ', 'Go!');
console.dir(res1);