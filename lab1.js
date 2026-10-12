function inc(n) {
    return n + 7;
}

const a = 8;
const b = inc(a);
console.dir({a, b});


function incObj(num) {
    num.n += 7;
}

 const obj = { n: 8 };
 incObj(obj);
 console.dir(obj);


 const array = [
    67, 1, 7, 15, 14,
    undefined,
    "Hello, World!", "Bohemian Rhapsody", "",
    [67, 15], [1, 7], [],
    true, false,
 ]

 const counts = {
    number: 0,
    undefined: 0,
    string: 0,
    object: 0,
    boolean: 0,
 }

 for (const item of array) {
    const type = typeof item;
    if (type in counts) {
        counts[type]++;
    }
 }
 console.log("counts:", counts);

const counts2 = {}

for (const item of array) {
    const type = typeof item;
    counts2[type] = (counts2[type] ?? 0) + 1;
}
console.log("counts2:", counts2);