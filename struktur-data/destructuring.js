/*
Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah 
object ke dalam satuan yang lebih kecil.
*/

// A. DESTRUCTURING OBJECT

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// tanpa destrukturing dibawah ini, ribet, harus deklarasi semuanya kedalam variabel dulu
// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;

// console.log(firstName, lastName, age);
/* output:
  John Doe 18
  */

//   pakai destrukturing -> simple

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);
/* output:
John Doe 18
*/
console.log();
// destrukturing assignment -> mendeklarasikan ulang data yang sudah ada sebelumnya

// di deklarasikan dulu
let firstName = "Dimas";
let age = 20;

// di inisiasi ulang datanya dari object profile
({ firstName, age } = profile);

console.log(firstName);
console.log(age);
/* output:
John
18
*/

console.log();
// default value
const profile1 = {
  first: "John",
  last: "Doe",
  umur: 18,
};

const { first, umur, isMale = false } = profile1;

console.log(first);
console.log(umur);
console.log(isMale);
/* output:
  John
  18
  false
  */

console.log();
//   Assigning to Different Local Variable Names

// mengubah nama asli parameter yang ada di dalam object menjadi nama variabel lain
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
/* output:
John
Doe
18
*/

console.log("\n");
// B. DESTRUCTURING ARRAY
/*
Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array 
menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada 
penamaan propertinya. Berikut contoh dari destructuring array pada ES6:
*/
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// nama variabel pada destrukturing array bebas, karena destrukturing pada array acuannya adalah posisi index data yang mau di ambil
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
/* output:
Seafood
Salad
Nugget
Soup
*/

console.log();
// mengambil data index ke-2 atau data array nomor 3.
const [, , dataKetiga] = favorites;

console.log(dataKetiga);
/* output:
Nugget
*/

console.log();

// Destructuring Assignment -> mengubah data pada variabel yang udah ditentukan, dan mengubah datanya dari data array tertentu
let myFood = "Ice Cream";
let herFood = "Noodles";

// mengubah data variabel myFood yang tadinya Ice Cream menjadi data index ke 0 dari array favorites yaitu Seafood
[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/

console.log();

var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// mau menukar nilai variabel, kode dibawah (tanpa destrukturing), panjang dan ribet.
temp = a;
a = b;
b = temp;

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

console.log();
// setelah pakai destrukturing seperti ini, tidak perlu variabel temp
[a, b] = [b, a];

console.log();

// Default Values -> jika kita mengakses data diluar panjang array, maka hasilnya undefined.
const favorites1 = ["Seafood"];
const [myFood1, herFood1] = favorites1;

console.log(myFood1);
console.log(herFood1);

/* output:
Seafood
undefined
*/

console.log();
const [myFood2, herFood2 = "Salad"] = favorites1;

console.log(myFood2);
console.log(herFood2);

/* output:
Seafood
Salad
*/
