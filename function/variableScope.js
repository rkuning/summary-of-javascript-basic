/*
Sejauh ini kita sudah mengenal function. Setelah kita memisahkan kode ke dalam blok atau fungsi terpisah, ada satu hal penting yang perlu kita tahu, yaitu variable scoping. Ada banyak keadaan di mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. Tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.

Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.

Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya. Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.

*/
// global variable, dapat diakses pada parent() dan child()
const a = "a";

function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = "b";

  function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const c = "c";
  }
}

function multiply(num) {
  total = num * num;
  return total;
}

let total = 9;
let number = multiply(20);

// nilai total yang di console dibawah ini adalah nilai total yang awalnya 9 tapi di
// deklarasikan ulang melalui function multiply, sehingga nilai total mengambil dari dalam function
// multiply
console.log(total);

/*
Mungkin kita berharap nilai total akan tetap 9, mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal. Kita tidak menggunakan keyword const atau let ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global.
*/

/* output
  400
  */
