/*
Reusable Function
Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable.
Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. 
Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami percaya, dengan 
memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.

Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di 
JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach.



Array Map
Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini 
dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.



Array Filter
Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. 
Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. 
Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, 
fungsi ini sangatlah cocok Anda gunakan.

Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. 
Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array:



Array Reduce
Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan 
untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.

arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

[...] adalah opsional parameter

Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya
pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.



Array some
array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.

arr.some(callback(element, [index], [array]), [thisArg])

[...] adalah opsional parameter

Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.



Array find
Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat 
nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali 
ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi 
pada item array.

arr.find(callback(element, [index], [array]), [thisArg]);

[...] adalah opsional parameter



Array sort
array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. 
Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

arr.sort([compareFunction])

[...] adalah opsional parameter



Array every
array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai 
dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.

arr.every(callback(element, [index], [array])


Array forEach
Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi 
index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. 
Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.


*/

// contoh array map
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => `${name}!`);

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 *
 */

// constoh array filter
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) => Boolean(item)); //mengambil nilai yang true saja

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85); //mengambil array object yang nilai studentnya diatas 85

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

// contoh penerapan reduce
const students2 = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students2.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 *
 */

// penerapan array some
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0); // mengetahui apakah dalam deretan angka di array terdapat angka genap atau tidak

console.log(even);

/** 
output true
**/

// penerapan array find
const students3 = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const findJames = students3.find((student) => student.name === "James"); // mencari siswa dengan nama James
console.log(findJames);

/**
    output
    { name: 'James', score: 88 }
    **/

// penerapan array sort
const months = ["March", "Jan", "Feb", "Dec"]; //default dari array sort adalah ascending / dimulai dari nilai yang terkecil atau huruf paling awal
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort(); // karena masih default dan cara pengurutannya menggunakan string, berarti angkanya tidak bisa urut dari nilai paling kecil ke besar
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

// contoh 2
const array3 = [1, 30, 4, 1000];

const compareNumber = (a, b) => a - b; // sortir jika nilai pertama lebih kecil dari nilai selanjutnya / diurutkan dari yang terkecil

const sorting = array3.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

/*
Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, 
dan positif (+).

Jika, negative maka `a` akan diletakkan sebelum `b`
Jika, positive maka `b` akan diletakkan sebelum `a`
Jika, 0 maka tidak ada perubahan posisi.

*/

// penerapan array every
const scores = [70, 85, 90];
const minimumScore = 70;

const examPassed = scores.every((score) => score >= minimumScore); //mengecek apakah seorang siswa telah lulus semua uji materi
console.log(examPassed);

// untuk mendapatkan output true, maka semua kriteria wajib terpenuhi. berbeda dengan some yang akan menghasilkan true jika terdapat
// minimal 1 data yang masuk ke kriteria
/**
output
true
**/

// penerapan array forEach
const names = ["Harry", "Ron", "Jeff", "Thomas"];

names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 *
 */

// Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses
// perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter.
const names2 = ["Harry", "Ron", "Jeff", "Thomas"];

for (let i = 0; i < names2.length; i++) {
  if (names2[i] === "Jeff") continue; // Bisa!

  console.log(`Hello, ${names2[i]}!`);
}

names2.forEach((name) => {
  //   if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});
