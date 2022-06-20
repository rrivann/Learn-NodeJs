let x;
console.log(typeof x);

/* output: undefined */

let y = 17.25;
console.log(typeof y);

/* output: number */

let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

let greet = 'Hello';
console.log(typeof greet);

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question);

/* output: "What do you think of JavaScript?" I asked */

let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

const myName = 'Luke';
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

x = true;
y = false;

console.log(typeof x);
console.log(typeof y);

/* output: 
boolean
boolean
*/

const a1 = 10;
const b2 = 12;

let isGreater = a1 > b2;
let isLess = a1 < b2;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

const id = Symbol('id');

console.log(id);

/* output
Symbol(id)
*/

const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 == id2);

/* output
false
*/
