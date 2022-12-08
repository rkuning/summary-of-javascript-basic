// A, DECLARATION FUNCTION

// a,b merupakan sebuah parameter yang digunakan untuk logic dari block code
function multiply(a, b) {
  return a * b;
}

function greeting() {
  console.log("Good Morning!");
}
greeting();
console.log();
/* output
  Good Morning!
  */

function greeting(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat Pagi ${name}!`);
  }
}

greeting("Harry", "French");
console.log();

/* output
  Bonjour Harry!
  */

//   mengembalikan nilai
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);
console.log();

/* output
  20
  */

//   mengembalikan nilai (2)
function greeting2(name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting2("Harry", "French");
console.log(greetingMessage);
console.log();
/* output
  Bonjour Harry!
  */

//   B. EXPRESSION FUNCTION
const greeting3 = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting3("Ron", "English"));
console.log();
/* output
  Good Morning Ron!
   */

// C. ARROW FUNCTION
/*
ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function 
mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan 
tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa
 function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow 
 function memiliki nama lengkap “arrow function expression”.
*/
// jika ada parameter
const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};
sayName("Leia");
console.log();
/* output
Nama saya Leia
 */
// tanpa parameter
const sayHello2 = () => {
  console.log("Selamat pagi semuanya!");
};

sayHello2();
console.log();
/* output
Selamat pagi semuanya!
*/

// Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.

const sayName3 = (name) => console.log(`Nama saya ${name}`);
sayName3("Leia");

const sayHello3 = () => console.log("Selamat pagi semuanya!");
sayHello3();
console.log();
/* output
Nama saya Leia
Selamat pagi semuanya!
 */

const multiply3 = (a, b) => a * b;
console.log(multiply3(3, 4));

/* output
12
 */
