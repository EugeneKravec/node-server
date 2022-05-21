const http = require('http')
const fs = require("fs");
// import favicon from './favicon-32x32.png'

const PORT = 3004;

let resCounter = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' }).end();
        return;
    }
    resCounter++

    switch (req.url) {
        case '/about':
            res.write('My name is Eugene');
            break;
        case '/habits':
            res.write('Computer and coffee');
            break;
        case '/':
        case '/about':
            res.write('My name is Eugene');
            break;

        default:
            res.write('404 NOT FOUND ');

    }

    res.end(' End ' + resCounter)
})

server.listen(PORT)