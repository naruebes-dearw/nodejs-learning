const path = require('path')

console.log(path.sep)

// join path
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

// filename
const base = path.basename(filePath)
console.log(base) 

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)