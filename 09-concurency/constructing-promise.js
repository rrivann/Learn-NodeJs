const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve('Kopi berhasil dibuat');
  } else {
    reject('Mesin kopi tidak bisa digunakan');
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};
(async () => {
  const coffeePromise = await makeCoffee();
  console.log(coffeePromise);
})();

/* output
Promise { 'Kopi berhasil dibuat' }
*/
