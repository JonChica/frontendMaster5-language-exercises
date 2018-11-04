// Simple spread object, but pass by reference objects inside original to the clone.
// const clone = (source) => ( {...source} );

// Deep clone
function clone(source) {
  let cloneObj = {};
  for (let k in source) {
    cloneObj[k] = (typeof (source[k]) === 'object')
      ? clone(source[k])
      : source[k];
  }
  return cloneObj;
}

const cerberus = {
  id: 666,
  name: 'Cerberus',
  age: undefined,
  heads: {
    left: 'veltesta',
    center: 'tretesta',
    right: 'drittesta'
  }
}

const clonedCerberus = clone(cerberus);

console.log('Same object: ', cerberus === clonedCerberus);

clonedCerberus.heads.center = null;
cerberus.id = 55;

console.log('original', cerberus);
console.log('clone', clonedCerberus);
