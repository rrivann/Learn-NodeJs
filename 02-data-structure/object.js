let object = {key1: 'value1', key2: 'value2', key3: 'value3'};

const user = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 19,
  isJedi: true,
  'home world': 'Tattooine',
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user['home world']}`);

const spaceship = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};

spaceship.color = 'Glossy red';
spaceship['maxSpeed'] = 1300;
spaceship.class = 'Light freighter';

console.log(spaceship);
delete spaceship.manufacturer;

console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */
