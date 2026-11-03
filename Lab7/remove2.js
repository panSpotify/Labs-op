'use strict'

function removeElements(array, ...items) {
    for (const item of items) {
        const index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 3, 1);
console.log(array);

const arr = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Giorno', 'Jolyne', 'Johnny', 'J8suke'];
removeElements(arr, 'Johnny', 'J8suke');
console.log(arr);