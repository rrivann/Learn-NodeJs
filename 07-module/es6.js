const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

export default coffeeStock;

import coffeeStock from './state.js';

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
