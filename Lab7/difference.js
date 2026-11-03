'use strict'

function difference(array1, array2) {
    const result = [];
    for (const item of array1) {
        if (!array2.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [5, 3, 1];
console.log(difference(array1, array2));

const arr1 = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Giorno', 'Jolyne', 'Johnny', 'J8suke'];
const arr2 = ['Johnny', 'J8suke'];
console.log(difference(arr1, arr2));