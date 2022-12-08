let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray);
/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

console.log(myArray[1]);
/* output:
42.5
*/

// jika mengakses index yang tidak ada pada array, maka akan undefined
console.log(myArray[5]);
/* output:
undefined
*/

// menambah data ke paling belakang dalam array, pakai method push();
myArray.push("JavaScript");
console.log(myArray);
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
myArray.pop();
console.log(myArray);
/* output
[ Cokelat, 42.5, 22, true, 'Programming' ]
*/

// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array.
myArray.shift();
console.log(myArray);
/* output
[ 42.5, 22, true, 'Programming' ]
*/

// unshift() -> untuk menyisipkan elemen baru di awal array
myArray.unshift("Apple");
console.log(myArray);
/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// menghapus data dari array? menggunakan delete, sama seperti pada object.
delete myArray[1];
console.log(myArray);
/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

// Untuk menghapus elemen, gunakan metode splice() seperti ini
myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);
/* output
[ 'Apple', <1 empty item>, true, 'Programming' ]
*/
