const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

// const {firstName, lastName, age} = profile;

// console.log(firstName, lastName, age);

/* output:
John Doe 18
*/

// menginisialisasi nilai baru melalui destructuring object
// ({firstName, age} = profile);

// console.log(firstName);
// console.log(age);

/* output:
John
18
*/

// const {firstName, age, isMale} = profile;

// console.log(firstName);
// console.log(age);
// console.log(isMale);

/* output:
John
18
undefined
*/

const {firstName, age, isMale = false} = profile;

console.log(firstName);
console.log(age);
console.log(isMale);

/* output:
John
18
false
*/

const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

/* output:
John
Doe
18
*/
