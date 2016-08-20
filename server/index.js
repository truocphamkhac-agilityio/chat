'use strict';

const PORT = 8020;
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', msg => {
        console.log('user chat message');
        io.emit('chat message', msg);
    });
});

server.listen(PORT, () => {
    console.log('Server already listen on', PORT);
});
