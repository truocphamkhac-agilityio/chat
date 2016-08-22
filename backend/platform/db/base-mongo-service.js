/**
 * base mongo service endpoint
 */
'use strict';

class BaseMongoService {
    /**
     * save document
     * @param  {Object}   data - The data object
     * @param  {Function} fn   - The callback function
     * @return {Function}      - The callback function to save document
     */
    save(data, fn) {
        if (!this.model) {
            throw Error('This service has no model');
        }

        const document = new this.model(data);
        return document.save(fn);
    }

    /**
     * get all document
     * @param  {Function} fn - The callback function
     * @return {Function}    - The callback function
     */
    getAll(fn) {
        if (!this.model) {
            throw Error('This service has no model');
        }

        this.model.find({}, (error, raws) => {
            return fn(error, raws);
        });
    }
}

/**
 * Expose.
 */
module.exports = BaseMongoService;
