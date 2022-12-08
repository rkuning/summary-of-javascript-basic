/*
WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana 
interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh 
program [3]. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan 
di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.

Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:

1. Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak 
mendukung garbage collection.
2. WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable 
sehingga tidak memiliki method keys(), values(), atau forEach().
WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
*/

// Perbedaan Map dan WeakMap
// 1. Map
let visitsCountMap1 = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap1.get(user) || 0;
  visitsCountMap1.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap1);
}, 10000);

/* output
Map(1) { { name: 'Jonas' } => 1 } //menunggu 10 detik dulu
*/

// 2. WeakMap
const { inspect } = require("util");

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas2 = { name: "Jonas" };
countUser(jonas2); // Menambahkan user "Jonas"

jonas2 = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/
