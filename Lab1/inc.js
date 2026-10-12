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