const { john, peter } = require('./1-names');
const sayName = require('./2-sayname');
const person = require ('./3-altenative');

require('./4-sum-values')
// console.log(john, peter);
sayName('Susan');
sayName(john);
sayName(peter);
// console.log(person);