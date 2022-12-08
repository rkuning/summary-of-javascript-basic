/*
Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah 
Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/
const myMap = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap);
console.log();
/* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
  */

/*
Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. 
Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan elemen keduanya merupakan value.

Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). 
Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
*/

const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size); //mendapatkan jumlah data
console.log(capital.get("London")); //mendapatkan data dari key London
capital.set("New Delhi", "India"); //menambah data map baru dengan key New Delhi dan value India
console.log(capital.size);
console.log(capital.get("New Delhi"));
console.log();

/* output
  3
  England
  4
  India
   */

//   menetapkan dan mendapatkan data pada map bisa dilakukan juga dengan cara dibawah ini :
const wrongMap = new Map();

wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);
console.log();

/* 
akan tetapi Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai 
generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan 
fitur dari Map seperti .has atau .delete.
*/

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));
console.log();
/* output
false
false
 */

// Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.
