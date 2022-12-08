/*
Promise All
Pada materi sebelumnya kita belajar bagaimana promise dapat menangani situasi di mana terdapat asynchronous process yang 
saling membutuhkan untuk melaksanakan tugasnya. Lalu bagaimana jika kita ingin menjalankan banyak promise sekaligus tanpa 
memedulikan urutan? Bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lebih efisien?

Ketika pergi ke sebuah kedai kopi bersama rekan kerja, kita biasanya memesan kopi secara bersamaan. Meskipun kopi yang 
kita pesan berbeda, tak jarang pelayanan mengantarkan pesanan bersamaan. Nah, pada kasus inilah pelayan menggunakan teknik 
Promise.all().

Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya. Kemudian method tersebut akan 
mengembalikan nilai seluruh hasil dari promise dalam bentuk array.

Contohnya seperti berikut.

const promises = [firstPromise(), secondPromise(), thirdPromise()];
 
Promise.all(promises)
  .then(resolvedValue => {
    console.log(resolvedValue);
  });
 
 output
[ 'first promise', 'second promise', 'third promise' ]


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

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Kopi sudah siap!");
    }, 2000);
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

const makeEspresso = () => {
  checkAvailability()
    .then((value) => {
      console.log(value); // value = hasil dari checkAvailability() yaitu "Mesin kopi siap digunakan."
      return checkStock();
    })
    .then((value) => {
      console.log(value); // value = hasil dari checkStock() yaitu Stock cukup. Bisa membuat kopi.
      // menggunakan promise all
      const promises = [boilWater(), grindCoffeeBeans()];

      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value); // value berupa array dimana itu adalah hasil dari promise all array [boilWater(), grindCoffeeBeans()]
      return brewCoffee();
    })
    .then((result) => {
      console.log(result); // result = hasil dari brewCoffee() yaitu membuatkan kopi anda \n Kopi sudah siap.
      state.isCoffeeMachineBussy = false;
    })
    .catch((rejectReason) => {
      console.log(rejectReason);
      state.isCoffeeMachineBussy = false;
    });
};

makeEspresso();
