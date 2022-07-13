// TODO 1
const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2
const MyEmitter = new EventEmitter();

// TODO 3
MyEmitter.on('birthday', birthdayEventListener);

// TODO 4
MyEmitter.emit('birthday', 'rivan');
