// cara import 1 data dengan module es6
// karena pada file expoEs6 bernilai export default, maka sebenarnya nama dari import itu bebas mau apa aja
// import coffeeStock from "./expEs6.js";

// cara import banyak data, namanya harus sama seperti pada exportnya
import { coffeeStock, isCoffeeMachineReady } from "./expEs6.js";

// jika ingin mengubah nama variablenya, caranya seperti ini
// import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
