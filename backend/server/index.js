'use strict';

const PORT = process.env.PORT || 8020;
const app = require('./app');
const logger = require('../utils/logger')('server');

app.listen(PORT, () => {
    logger.info(`Server is started at port: ${PORT}`);
});
