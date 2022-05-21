const http = require('http');
// const { setTimeout } = require('timers');
const fs = require("fs");

const PORT = 3004;

const delay = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, ms);

    })
}

const readFile = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })
}

const server = http.createServer(async (request, response) => {

    switch (request.url) {
        case '/home':
            try {
                const data = await readFile('pages/index.html')
                response.write(data);
                response.end();
            } catch (err) {
                response.write('Some ERRRRRORR!!!');
                response.end();
            }

            break;
        case '/about':
            await delay(3000)
            response.write('Hello Favicon from about');
            response.end();
            break;
        default:
            response.write('404 NOT FOUND');
            response.end();
    }
})
server.listen(PORT)