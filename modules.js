// const xyz = require('./people');
// console.log(xyz.people);

// const {people} = require('./people');
// console.log(people);

const {people, ages} = require('./people');
console.log(people, '\n', ages, '\n');

const os = require('os');
console.log(os.platform(), '\n', os.homedir());