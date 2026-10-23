'use strict'

function max(matrix) {
    return matrix.reduce((maxRow, row) => {
        const maxInRow = Math.max(...row);
        return Math.max(maxRow, maxInRow);
    }, -Infinity);
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(max([[0, 0, 20], [6, 90, 0], [7, 12, 9]]))