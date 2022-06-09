console.log('Express Tutorial')

const http = require('http')
const { restart, reset } = require('nodemon')
const {readFileSync} = require('fs')

//get home page
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req,res)=>{
    //console.log('user hit the server')
    //res.end('home page')
    //console.log(req.method)
    console.log(req.url)
    const url = req.url
    // home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // error page
    else {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})

server.listen(5000)