// Simple spread object, but pass by reference the objects inside 'original' to 'clone'
// Stage 4 proposal - ES2018
// const clone = (source) => ( {...source} );

// Deep copy (recursive) // Sure it's a better way to do it, without lodash '_cloneDeep'
// function clone(source) {
//   const cloneObj = {};
//   for (let k in source) {
//     if (source.hasOwnProperty(k)) {
//       cloneObj[k] = (typeof (source[k]) === 'object')
//         ? clone(source[k])
//         : source[k];
//     }
//   }
//   return cloneObj;
// }

// Tricky solution: I don't like it, but it seems to work fine
const clone = source => JSON.parse(JSON.stringify(source));

const cerberus = {
  id: 666,
  name: 'Cerberus',
  age: undefined,
  heads: {
    left: 'veltesta',
    center: 'tretesta',
    right: 'drittesta',
  },
};

const clonedCerberus = clone(cerberus);

console.log('Same object: ', cerberus === clonedCerberus);

clonedCerberus.heads.center = null;
cerberus.id = 55;

console.log('original', cerberus);
console.log('clone', clonedCerberus);
