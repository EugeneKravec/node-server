const http = require('http');
// const { setTimeout } = require('timers');
const fs = require("fs");

const PORT = 3004;

const server = http.createServer((request, response) => {

    switch (request.url) {
        case '/home':
            fs.readFile('pages/indecx.html', (err, data) => {
                if (err) response.write('500 Some error occured')
                else response.write(data);
                response.end();
            })

            break;
        default:
            response.write('404 NOT FOUND');
            response.end();
    }
})
server.listen(PORT)