/*
Consuming Promises
Setelah mengetahui bagaimana membuat objek Promise, hal yang tentunya sangat penting adalah tahu bagaimana 
mengonsumsinya. Seperti yang telah kita bahas sebelumnya, status awal dari Promise adalah pending. Kemudian, 
akan ada dua kemungkinan yang terjadi, fulfilled atau rejected.

Untuk menangani hasil dari Promise, kita gunakan method .then(). Jika kita terjemahkan, “then” berarti “kemudian”, 
sehingga kurang lebih kita memerintahkan JavaScript seperti ini: “Jika janji saya sudah selesai, kemudian lakukan ...”. 
Jika dituliskan dalam bentuk kode akan seperti berikut:
*/
// const myPromise = new Promise(executorFunction);
// myPromise.then(onFullfilled, onRejected);

const stock = {
  coffeeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
      resolve("Stok cukup. Bisa membuat kopi");
    } else {
      reject("Stok tidak cukup");
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

// checkStock().then(handleSuccess, handleFailure); // cara 1
checkStock()
  .then(
    (res) => console.log(res),
    (rej) => console.log(rej)
  )
  .catch((err) => console.log(err)); // cara 2
