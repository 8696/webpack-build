import A from './A';

const p = require('../package.json');

A.v = p.version;

module.exports = A;
