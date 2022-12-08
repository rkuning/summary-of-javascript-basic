let x = 10;
let y = 5;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

console.log(x);

/* output
15
*/

/*
Operator Perbandingan
==	Membandingkan kedua nilai apakah sama (tidak identik).
!=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
===	Membandingkan kedua nilai apakah identik.
!==	Membandingkan kedua nilai apakah tidak identik.
>	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
>=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
<	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
<=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
 */

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

/*
&&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
!     Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
 */

let i = 10;
let j = 12;

/* AND operator */
console.log(i < 15 && j > 10); // (true && true) -> true
console.log(i > 15 && j > 10); // (false && true) -> false

/* OR operator */
console.log(i < 15 || j > 10); // (true || true) -> true
console.log(i > 15 || j > 10); // (false || true) -> true

/* NOT operator */
console.log(!(i < 15)); // !(true) -> false
console.log(!(i < 15 && j > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/
