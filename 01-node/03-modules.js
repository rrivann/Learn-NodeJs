// CommonJS, every file is commonJs (by default)
// Module = Encapsulated code (only share minimum)

const {rivan, albani} = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-data');
require('./07-sum');
sayHi(rivan);
sayHi(albani);
