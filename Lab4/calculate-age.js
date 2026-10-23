'use strict'

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(people) {
    const result = {};
    for (const person of people) {
        const { born, died } = persons[person];
        result[person] = died - born;
    }
    return result;
}

console.log(ages(['lenin', 'mao', 'gandhi', 'hirohito']));