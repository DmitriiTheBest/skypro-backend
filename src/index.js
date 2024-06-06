const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.message = 'OK';
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World');
    res.end();
});

server.listen(3003, '127.0.0.1', () => {
    console.log('Server is running at http://127.0.0.1:3003/');
});

