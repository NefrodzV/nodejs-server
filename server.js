const http = require('node:http');
const fs = require('fs')

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((request, response) => {
  switch(request.url) {
    case '/': {
      response.writeHead(200 ,{'Content-Type': 'text/html'})
      fs.readFile('./index.html', (err,data) => {
        if(err) {
          throw new Error("[FS] Reading file error " + err)
        }
        response.end(data)
      })
      break
    }

    case '/about': {
      response.writeHead(200, {"Content-Type": "text/html"})
      fs.readFile("./about.html", (err, data) => {
        if(err) {
          throw new Error("[FS] Reading file error " + err)
        }
        response.end(data)
      })
      break
    }

    case '/contact-me': {
      response.writeHead(200, {"Content-Type": "text/html"})
      fs.readFile('./contact-me.html', (err, data) => {
        if(err) {
          throw new Error("[FS] Reading file error " + err)
        }
        response.end(data)
      })
      break
    }

    // If we link a style file the browser with request the file to the server so we must send it
    case "/style.css": {
      response.writeHead(200, {'Content-Type': 'text/css'})
      fs.readFile('./style.css', (err, data) => {
          if(err) {
            throw new Error("[FS] Reading file error " + err)
          }
          response.end(data)
      })
      break
    }

    default: {
      console.log("Error page sending")
      response.writeHead(404 ,{'Content-Type': 'text/html'})
      fs.readFile('./404.html', (err, data) => {
        if(err) {
          throw new Error("[FS] Reading file error " + err)
        }
        response.end(data)
      })
    }
  }
})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

