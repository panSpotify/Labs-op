'use strict'

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

const result = Object.entries(iface)
  .filter(([key, value]) => typeof value === 'function')
  .map(([key, func]) => [key, func.length]);

console.log(result);