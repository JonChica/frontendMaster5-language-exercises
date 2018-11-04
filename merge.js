const merge = (source, target) => ({ ...target, ...source });

const cerberusTarget = {
  id: 'toUpdate',
  name: 'Cerberus',
  age: undefined,
  heads: {
    left: 'veltesta',
    center: 'tretesta',
    right: 'drittesta'
  }
}

const cerberusSource = {
  id: 666,
  name: 'Cerberus',
  age: 1000,
  foes: {
    foe1: 'Hermes',
    foe2: 'Heracles',
    foe3: 'Orpheus'
  }
}

const cerberus = merge(cerberusSource, cerberusTarget);
console.log('Merged', cerberus);
