'use strict'

function IpToNum(ip = '127.0.0.1') {
    return ip.split('.').reduce((acc, byte, index) => acc + (parseInt(byte) << (24 - index * 8)), 0) >>> 0;
}

console.dir(IpToNum('127.0.0.1'));
console.dir(IpToNum('10.0.0.1'));
console.dir(IpToNum('192.168.1.1'));
console.dir(IpToNum('255.255.255.255'));
console.dir(IpToNum('0.0.0.0'));