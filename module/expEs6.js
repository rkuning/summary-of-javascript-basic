const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

const isCoffeeMachineReady = true;

// cara export es6 yang hanya 1 data
// export default coffeeStock;

// sama seperti es5, jika banyak data, maka harus disimpan ke dalam object spt berikut
export { coffeeStock, isCoffeeMachineReady };
