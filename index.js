const _ = require('lodash')

const arr = [1,[2,[3,[4]]]]
// const newItem = _.flattenDeep(arr)
const newItem = _.flattenDeep(arr)
console.log(newItem)