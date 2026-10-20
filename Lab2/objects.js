'use strict'

function fn() {
    const obj1 = { name: "Johnatan" };
    let obj2 = { name: "Johnatan" };
    
    obj1.name = "Jotaro";
    obj2.name = "Josuke";

    console.dir(obj1);
    console.dir(obj2);
    // obj1 = obj2;
    console.dir(obj1);
    console.dir(obj2);
    obj2 = obj1;
    console.dir(obj1);
    console.dir(obj2);
}

fn();


function createUser(name, city) {
    return {
        name: name,
        city: city,
    };
}

console.dir(createUser("Kira", "Morioh"));