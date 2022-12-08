// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// for (let i = 0; i <= 100; i += 5) {
//   console.log(i);
// }

// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (let value of arrayOfNumbers) {
//     if (value < currentMin) {
//       currentMin = value;
//     } else if (value > currentMax) {
//       currentMax = value;
//     }
//   }

//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

// // const sayHello = function () {};
// const sayHello = () => {};
// function sayHello() {}

let myString = "";

try {
  myString += "a";
  throw Error();
} catch (e) {
  myString += "b";
} finally {
  myString += "c";
  throw Error();
  myString += "d";
}

console.log(myString);
