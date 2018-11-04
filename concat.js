
const concat = (a, b) => [...a, ...b];

const concatMulti = (...arrayData) => arrayData.reduce((output, elem) => [...output, ...elem]);


let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [11, 12, 13, 14, 15];

let resultConcat = concat(a, b);
let resultConcatMulti = concatMulti(a, b, c);

console.log('Concat: ', resultConcat);
console.log('Concat Multi: ', resultConcatMulti);
