const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf-8');
    const second = await readFilePromise('./content/second.txt', 'utf-8');
    writeFilePromise('./content/result-mind-grenade.txt', 'This awesome');
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

// const getText = (path) =>
//   new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });

// getText('./content/first.txt')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

start();
