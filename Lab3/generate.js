'use strict'

function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        key += characters[index];
    }
    return key;
}

const characters = 'lkckdshsrhfbfjsrfv45687436574378';
const key = generateKey(7, characters);
console.log(key);