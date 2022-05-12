const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
  console.log(`received ${name} ${age}`);
});
customEmitter.on('response', () => {
  console.log(`other logic`);
});

customEmitter.emit('response', 'rivan', 20);
