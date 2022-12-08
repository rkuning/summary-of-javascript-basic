// undefined
let x;
console.log(typeof x);

// number
let y = 10;
let m = 17.25;
console.log(typeof y);
console.log(typeof m);

/**
 * operator aritmatika pada data tipe number
 * + => penjumlahan 10 + 10 = 20
 * - => pengurangan 15 - 7 = 8
 * / => pembagian 15 / 3 = 5
 * * => perkalian 3 * 3 = 9
 * ** => perpangkatan 3 ** 3 = 27
 * % => sisa bagi 10 % 2 = 0
 */

// increment & decrement
let postfix = 5;
postfix++; // jika di console postfix++ nilai akan tetap 5, karena hasil ekspresion adalah nilai sebelum ditingkatkan
console.log(postfix); //6

let prefix = 1;
console.log(--prefix); //0 (output langsung dihitung & ditampilkan)

// BigInt => nilai integer yang panjang (ditandai dengan deklarasi "n" dibelakangnya)
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// Strings
let greet = "Hello";
console.log(typeof greet);

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question);

/* output: "What do you think of JavaScript?" I asked */

const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);

let greet2 = "Hello";
let moreGreet = greet2 + greet;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// Boolean
let e = true;
let q = false;

console.log(typeof e);
console.log(typeof q);

/* output: 
boolean
boolean
*/

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/
