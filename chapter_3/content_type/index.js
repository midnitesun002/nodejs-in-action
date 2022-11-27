const http = require('http');

const server = http.createServer((req, res) => {
    const { method, headers } = req;
    if (method === 'POST') {
        console.log('received a request', headers['content-type']);
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            console.log('received entire body');
            body = Buffer.concat(body).toString();
            console.log(body);

            res.end('done');
        });
    }
});

server.listen(3000, '0.0.0.0');