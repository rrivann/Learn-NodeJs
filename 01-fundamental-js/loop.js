for (let i = 0; i < 5; i++) {
  console.log(i);
}

/* output
0
1
2
3
4
*/

let myArray = ['Luke', 'Han', 'Chewbacca', 'Leia'];

for (const arrayItem of myArray) {
  console.log(arrayItem);
}

/* output
Luke
Han
Chewbacca
Leia
*/

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 100);
