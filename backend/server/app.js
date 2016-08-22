'use strict';

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const logger = require('../utils/logger')('server');
const DatabaseManager = require('../platform/db');
const databaseManager = new DatabaseManager();

// init database
databaseManager.init();

// configs
app.use(express.static(path.join(__dirname, '../public')));

// index endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

/**
 * USER API
 */
app.get('/api/users', (req,res) => {
    databaseManager.db.dbUser.getAll((error, users) => {
        res.send(users);
    });
});

app.get('/api/users/create', (req, res) => {
    const data = req.query || {};

    databaseManager.db.dbUser.save(data, (error, user) => {
        res.send(user);
    });
});

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
