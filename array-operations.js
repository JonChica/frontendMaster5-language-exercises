const head = ([first, ...rest] = []) => first;
const tail = ([first, ...rest] = []) => rest;
const init = array => array.slice(0, array.length - 1);
const last = array => array.slice(-1)[0];

const arrayNumbers = [1, 2, 3, 4, 5];

console.log('Head: ', head(arrayNumbers), ' from ', arrayNumbers);
console.log('Tail: ', tail(arrayNumbers), ' from ', arrayNumbers);
console.log('Init: ', init(arrayNumbers), ' from ', arrayNumbers);
console.log('Last: ', last(arrayNumbers), ' from ', arrayNumbers);
