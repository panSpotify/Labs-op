'use strict'

const phone_numbers = [
    { name: "Johnatan", number: "123-456-7890" },
    { name: "Jotaro", number: "987-654-3210" },
    { name: "Josuke", number: "555-555-5555" }
];

function findPhoneByName(name) {
    for (const item of phone_numbers) {
        if (item.name === name) {
            return item.number;
        }
    }
    return error("Name not found");
}

console.log(findPhoneByName("Johnatan"));

const phone_numbers_hash = {
    "Johnatan": "123-456-7890",
    "Jotaro": "987-654-3210",
    "Josuke": "555-555-5555"
};

function findPhoneByNameHash(name) {
    if (name in phone_numbers_hash) {
        return phone_numbers_hash[name];
    }
    return error("Name not found");
}

console.log(findPhoneByNameHash("Jotaro"));