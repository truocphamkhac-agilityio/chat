'use strict';

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const logger = require('../utils/logger')('server');

// configs
app.use(express.static(path.join(__dirname, '../public')));

// index endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

/**
 * USER API
 */

// socket io connection
io.on('connection', socket => {
    logger.info('a user connected');
    socket.on('disconnect', () => {
        logger.info('user disconnected');
    });
    socket.on('chat message', msg => {
        logger.info('user chat message -', msg);
        io.emit('chat message', msg);
    });
});

/**
 * Expose
 */
module.exports = server;
