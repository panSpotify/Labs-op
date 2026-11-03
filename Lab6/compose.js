'use strict';

function compose(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('All arguments must be functions');
        }
    }

    const listeners = [];

    function f(x) {
        try {
            return fns.reduceRight((acc, fn) => fn(acc), x);
        } catch (error) {
            for (const listener of listeners) {
                listener(error);
            }

            return undefined;
        }
    }

    f.on = function(event, callback) {
        if (event === 'error' && typeof callback === 'function') {
            listeners.push(callback);
        }

        return f;
    };

    return f;
}

const inc = x => x + 1;
const double = x => x * 2;
const cube = x => x * x * x;

function errorFunction(x) {
    throw new Error('Something went wrong!');
}

const f = compose(inc, double, cube);

console.log(f(5));

const f0 = compose(inc, errorFunction, double);

f0.on('error', function(e) {
    console.log('Caught error:', e.message);
});

console.log(f0(5));