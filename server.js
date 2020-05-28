const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, function() {
    console.log('Server started at port 3000');
})

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/src/index.html');
})

io.on('connection', function() {
    io.emit('user connects');
})