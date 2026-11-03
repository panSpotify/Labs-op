'use strict'

function unique(array) {
    const uniqueArray = [];
    for (const item of array) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
console.log(unique(array));

const arr = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Giorno', 'Jolyne', 'Johnny', 'J8suke', 'Jonathan', 'Joseph'];
console.log(unique(arr));