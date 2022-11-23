const net = require('net');
const server = net.createServer(socket => {
    console.log(`${socket.remoteAddress}:${socket.remotePort}`)
    socket.on('data', data => {
        socket.write(data);
    });
});

server.listen(8888, '0.0.0.0');