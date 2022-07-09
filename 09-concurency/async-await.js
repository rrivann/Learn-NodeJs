async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();

/* output
Biji kopi habis!
*/

async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeEspresso();

/* output
Membuatkan kopi Anda...
Kopi sudah siap!
*/

async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}
