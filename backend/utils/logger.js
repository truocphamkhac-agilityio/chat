/**
 * define logger utility
 */
'use strict';

const winston = require('winston');

const level = process.env.LOG_LEVEL || 'info'; // default log level is info.

/**
 * Expose.
 */
module.exports = function (label) {
  const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        colorize: true,
        label: label,
        level: level
      })
    ]
  });

  return logger;
};
