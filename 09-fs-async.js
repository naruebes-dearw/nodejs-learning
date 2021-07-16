const { readFile, writeFile } = require('fs')

console.log('start task')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err) 
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `2 Here is the result : ${first}, ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
        console.log('end of the task')
      }
    )
  })
})
console.log('start a new task')