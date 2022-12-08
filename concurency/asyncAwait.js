/*
Async-await
Pembahasan terakhir mengenai asynchronous process kali ini adalah penggunaan syntax async-await. Apa itu?

Seperti yang kita tahu, penulisan kode asynchronous sedikit berbeda dengan proses synchronous. Contohnya, untuk mendapatkan 
nilai coffee dari sebuah proses asynchronous, kita tidak dapat melakukannya dengan teknik seperti ini:

function makeCoffee() {
    const coffee = getCoffee(); // async process menggunakan promise
    console.log(coffee);
}
 
makeCoffee();

Melainkan harus seperti ini:

Promise
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();

Callback
function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
}
 
makeCoffee();

Namun, sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya synchronous process dengan bantuan 
keyword async dan await.

Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam 
JavaScript. Namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi penggunaan Promise dan generator (pembahasan 
      mengenai generator bisa Anda pelajari di sini). Sehingga, async/await ini tidak dapat digunakan jika tidak ada Promise.

Lantas bagaimana cara menggunakan async/await ini? Pada contoh kode sebelumnya, mari kita lihat juga fungsi getCoffee() dan 
bagaimana ia mengembalikan promise.

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

Untuk mendapatkan nilai dari fungsi getCoffee() menggunakan .then(), maka kode kita akan seperti ini:

function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();
 
output
Kopi didapatkan!

Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous. Kira-kira kode program kita akan 
seperti berikut:

async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}
 
makeCoffee();
 
output
Kopi didapatkan!

Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous. 
Lalu, keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan 
nilai promise resolve.

Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi ini tidak akan mengganggu 
proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee berjalan secara asynchronous, 
kita tidak dapat menggunakan await tanpa membuat function dalam scope-nya berjalan secara asynchronous.


Handle onRejected using async-await
Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). 
Lantas bagaimana jika promise gagal dilakukan (onRejected)? Caranya cukup sederhana. Kembali lagi kepada prinsip synchronous 
code. Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.

Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah promise, untuk menempatkannya 
di dalam blok try seperti ini:

async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeCoffee();
 
output
Biji kopi habis!

Chaining Promise using async-await
Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan async/await? 
Jawabannya adalah sama seperti ketika kita mendapatkan nilai dari function yang berjalan secara synchronous.

Dengan pendekatan async-await, maka kode mesin kopi kita akan menjadi seperti ini:

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeEspresso();
 
output
Membuatkan kopi Anda...
Kopi sudah siap!

*/

const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBussy: false,
};

const checkAvailability = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBussy) {
        res("Mesin kopi siap digunakan.");
      } else {
        rej("Maaf, mesin sedang sibuk");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBussy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stock cukup. Bisa membuat kopi.");
      } else {
        reject("Stock tidak cukup.");
      }
    }, 1500);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Bubuk kopi sudah siap!");
    }, 1000);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Kopi sudah siap!");
    }, 2000);
  });
};

// memakai async await

const makeEspresso = async () => {
  try {
    const resAvailability = await checkAvailability();
    console.log(resAvailability);
    await checkStock();
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
};

makeEspresso();
