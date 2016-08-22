'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

/**
 * Expose.
 */
module.exports = () => {
    const User = mongoose.model('User', UserSchema);
    return User;
};
