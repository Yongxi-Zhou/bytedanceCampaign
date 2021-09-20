const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // response.end('Hi Node')

    const{url, method} = request
    if (url === '/' && method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type':'text/plain;charset=utf-8'
                })

                response.end('500 Server挂了')
            } else {
                response.statusCode = 200
                response.setHeader('Content-Type', 'text/html')
                response.end(data)
            }
        })
    } else {
        response.statusCode = 400
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end('404 NotFound')
    }
}).listen(7000, () => {
    console.log('Server at 7000');
})