const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    res.end('<h1>Welcome to our homepage</h1>')
  } else if (req.url === '/about') {
    res.end('Here is our infomation')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>the page is not found</p>
      <a href="/">return to home page</a>
    `)
  }
})

server.listen(5000)