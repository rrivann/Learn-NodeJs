const orderCoffee = (callback) => {
  let coffee = null;
  console.log('Sedang membuat kopi, silakan tunggu...');
  setTimeout(() => {
    coffee = 'Kopi sudah jadi!';
    console.log(coffee);
    // callback(coffee);
  }, 3000);
};

orderCoffee((coffee) => {
  console.log(coffee);
});

// Callback Hell
function makeACake(...rawIngredients) {
  const ingredients = collectIngredients(rawIngredients);
  dough = makeTheDough(ingredients);
  pouredDough = pourDough(dough);
  cake = bakeACake(pouredDough);
  console.log(cake);
}

function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);
}
