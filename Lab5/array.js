'use strict'

function array() {
    const arr = [];
    const get = (index) => arr[index];

    get.push = (value) => arr.push(value);
    get.pop = () => arr.pop();

    return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());