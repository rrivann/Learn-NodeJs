const _ = require('lodash'); // TODO
const moment = require('moment');

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
