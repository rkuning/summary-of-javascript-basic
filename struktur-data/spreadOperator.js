// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut:
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(favorites);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

console.log(...favorites);
// kode di atas sama dengan kode dibawah
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
/* output
Seafood Salad Nugget Soup
*/

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
const allFavorites = [favorites, others];
console.log(allFavorites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/
// Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, variabel allFavorites menjadi array baru yang menampung dua array di dalamnya.

// pakai spread operator untuk menggabungkan 2 buah array atau lebih

const allFavorites1 = [...favorites, ...others];
console.log(allFavorites1);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

// spread juga bisa digunakan untuk menggabungkan 2 buah object atau lebih
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
