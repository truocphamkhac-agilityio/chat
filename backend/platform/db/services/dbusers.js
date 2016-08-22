'use strict';

const BaseService = require('../base-mongo-service');

// model
const User = require('../schema/user')();

class UserService extends BaseService {
    /**
     * @override
     */
    init() {
        this.model = User;
    }
}

/**
 * Expose.
 */
module.exports = UserService;
