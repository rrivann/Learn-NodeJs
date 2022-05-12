// npm = global command

// local dependency
// npm i package

// global dependency
// npm i -g
// sudo install -g (mac)

// package.json = manifest file
// manual approach in package.json
// npm init step by step
// npm init -y auto

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
console.log(items);
const newItems = _.flattenDeep(items);
console.log(newItems);
