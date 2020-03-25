const {serveHTTP} = require('stremio-addon-sdk');
const addon = require('./addon');

serveHTTP(addon, {port: process.argv[2] || 39730});
