/*
Promise
Promise merupakan salah satu fitur penting dari ES6. Promise ini dapat menggantikan peran callback dengan menggunakan 
ciri khas fungsi .then-nya. Namun, mengapa fitur ini dinamakan dengan “Promise” alias “Janji”?

Fitur ini berfungsi seperti namanya, yaitu untuk membuat janji. Mari kita analogikan kembali dalam dunia nyata. 
Ketika kita memesan kopi kepada pelayan, maka secara tidak langsung pelayan tersebut berjanji kepada kita untuk 
membuatkan kopi dan menyajikannya pada kita. Namun janji bisa hanya tinggal janji. Dalam dunia nyata pun, janji juga 
bisa tidak terpenuhi, entah itu karena kopi pesanan kita sedang kosong, atau mesin pembuat kopi sedang rusak.

Nah, Promise memiliki perilaku yang sama dengan analogi di atas. Promise memiliki tiga kondisi, yaitu:

Pending (Janji sedang dalam proses)
Fulfilled (Janji terpenuhi)
Rejected (Janji gagal terpenuhi)
Lantas bagaimana cara membuat janji (Promise) di JavaScript?

Constructing Promise Object
Promise merupakan sebuah objek yang digunakan untuk membuat sebuah komputasi (kode) ditangguhkan dan berjalan secara 
asynchronous [5]. Untuk membuat objek promise, kita gunakan keyword new diikuti dengan constructor dari Promise:


*/

// const coffee = new Promise();

const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};
const coffeePromise = makeCoffee();
console.log(coffeePromise);

/*
Executor function memiliki dua parameter, yaitu resolve dan reject yang berupa fungsi. Berikut penjelasan detailnya:

resolve() adalah parameter pertama pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu parameter. 
Biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan. Ketika fungsi ini terpanggil, 
kondisi Promise akan berubah dari pending menjadi fulfilled.

reject() adalah parameter kedua pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu 
parameter dan digunakan untuk memberikan alasan kenapa Promise tidak dapat terpenuhi. Ketika fungsi ini terpanggil, 
kondisi Promise akan berubah dari pending menjadi rejected.

Executor function akan berjalan secara asynchronous hingga akhirnya kondisi Promise berubah dari pending menjadi 
fulfilled/rejected.

Kenapa demikian? Executor function mengeksekusi resolve() dengan membawa data string “Kopi berhasil dibuat”. 
Jika kita ubah nilai dari variabel isCoffeeMakerReady menjadi false, maka executor function akan mengeksekusi 
reject() dengan membawa pesan penolakan “Mesin kopi tidak bisa digunakan”.
*/
