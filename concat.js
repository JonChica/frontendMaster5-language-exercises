
const concat = (a, b) => [...a, ...b];

const concatMulti = (...arrays) => arrays.reduce((acc, val) => [...acc, ...val]);


const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
const c = [11, 12, 13, 14, 15];

const resultConcat = concat(a, b);
const resultConcatMulti = concatMulti(a, b, c);
console.log('Concat: ', resultConcat);
console.log('Concat Multi: ', resultConcatMulti);
