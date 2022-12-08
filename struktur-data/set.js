/*
Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan 
Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga 
bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini:
*/

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);
console.log();

/* output
Set(3) { 1, 4, 6 }
*/

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);
console.log();
/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

/*
Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
*/

numberSet.add(...[2, 3, 4, 5, 6, 8, 9, 3]); //tidak bisa, hanya di ambil nilai index ke 0
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

/* output
Set(5) { 1, 6, 5, 10, 2 }
*/

/*
Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
*/
