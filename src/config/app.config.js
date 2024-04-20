/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-flow').config();
const configs = {
  STAGE: process.env.STAGE,
  PREFIX: process.env.PREFIX,
  DB: {
    url: process.env.DB_HOST,
    user: process.env.DB_USERNAME || 'user',
    pass: process.env.DB_PASSWORD || 'pass',
    dbName: process.env.DB_NAME || 'dron_db',
    autoCreate: true,
    autoIndex: false,
    ssl: (process.env.DB_SSL == 'true'),
  }
};
module.exports = configs;