'use strict'

function iterate(object, callback) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            callback(object[key], key, object);
        }
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (value, key, object) => {
    console.log({ key, value });
});

const object = { Jonathan: 1, Joseph: 2, Jotaro: 3, Josuke: 4, Giorno: 5, Jolyne: 6, Johnny: 7, J8suke: 8 };
iterate(object, (value, key, object) => {
    console.log({ key, value });
});