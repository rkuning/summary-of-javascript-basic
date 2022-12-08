/*
Export & Import
Modul bekerja dengan cara exporting dan importing nilai. Baik itu nilai variabel, fungsi, array, object, atau class agar bisa digunakan pada berkas JavaScript lain. Satu berkas JavaScript terdiri dari satu module yang dapat kita export menjadi lebih dari satu nilai.

Dalam environment Node.js, gunakan perintah module.exports untuk melakukan proses export module. Setiap berkas JavaScript yang berjalan pada Node, memiliki objek module lokal yang memiliki properti exports. Properti tersebut digunakan untuk mendefinisikan nilai apa yang akan diekspor dari berkas tersebut.

Buatlah berkas baru bernama state.js pada project Anda. Kode di bawah ini merupakan contoh bagaimana melakukan export nilai menggunakan module.exports.
*/

const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

const isCoffeeMachineReady = true;

// cara export jika hanya 1 function / data
// module.exports = coffeeStock;

// cara export banyak data, disimpan kedalam object
module.exports = { coffeeStock, isCoffeeMachineReady };
console.log(module);
