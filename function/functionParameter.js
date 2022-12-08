/**
 * perbedaan parameter dan argument
 * Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. 
 * ex :
 * 
function multiply(a, b) {
    return a * b;
}
 * 
 * Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. 
 * ex :
 * 
multiply(3, 4);
 */

// parameter function juga bisa dalam bentuk object(array, object dll)
const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);
console.log();
/* output
  kren is Kylo Ren
  */

//   DEFAULT PARAMETER

/*
Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
*/
// tanpa default parameter
function exponentsFormula(baseNumber, exponent) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);
console.log();
/* output
  2^undefined = NaN
  */

//   dengan default parameter
function exponentsFormula1(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula1(3);

/* output
  3^2 = 9
  */

//   REST PARAMETER
/*
Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
*/

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
  15
  */
