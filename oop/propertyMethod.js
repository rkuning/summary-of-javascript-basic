// A. PROPERTY
// cara 1
class Mail {
  constructor() {
    this.from = "pengirim@dicoding.com";
    //     this.contacts = []; // deklarasi public, artinya bisa diakses dari luar class
    this._contacts = []; // private, yang berarti hanya dapat di akses dari dalam class saja
    this.yourOtherProperty = "the values";
  }
  #contacts = []; // deklarasi private juga, akan tetapi tidak bisa ditaruh di constructor.
  sendMessage(msg, to, from) {
    console.log(`you send: ${msg} to ${to} from ${from}`);
    // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
    //     this.contacts.push(to);
  }

  //   method static, artinya jika ingin memanggil, maka tidak perlu inisiasi kelas terlebih dahulu.
  static isValidPhone(phone) {
    return typeof phone === "number";
  }
}

// cara 2
function Mail2() {
  this.from = "pengirim@dicoding.com";
  this.contacts = [];
  var contacts = []; // menggunakan var pada function artinya variabelnya lokal, hanya bisa di akses dalam function tsb
  this.yourOtherPrototype = "the values";
}

Mail2.prototype.sendMessage = function (msg, to) {
  console.log(`you send: ${msg} to  ${to} from ${this.from}`);
  this.contacts.push(to); // menyimpan kontak baru
};

const mail1 = new Mail();
mail1.sendMessage("hallo", "penerima@dicoding.com", "aku@gmail.com");

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

const mail12 = new Mail();
mail12.from; // 'pengirim@dicoding.com'
mail12.sendMessage("hallo", "penerima@dicoding.com"); // method mengirim pesan
console.log(mail12.contacts); // ['penerima@dicoding.com']

// B. METHOD

// Class Method adalah function atau method yang ada di dalam sebuah object. Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan. Contoh class mail di atas, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu.
const mail13 = new Mail();
mail13.sendMessage("hallo", "penerima@dicoding.com");
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/
// Mail.sendMessage("hallo", "penerima@dicoding.com"); // akan error, karena tidak di inisiasi classnya dulu
console.log(Mail.isValidPhone(089000000000)); //true

// C. CONSTRUCTOR
// Ketika kita membuat sebuah objek, adakalanya karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali diinisiasi. Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat. Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah objek diinisiasi. Maka dalam JavaScript ada dua cara, yaitu:
class Email1 {
  constructor(author) {
    this.from = author;
    console.log("is instantiated", author);
  }
}

// cara 2, jika kita menggunakan statement function
function Email2(author) {
  this.from = author;
  console.log("is instantiated", author);
}

// pemanggilannya jika pake constructor jadi seperti ini
const mail5 = new Mail(085000111222); // misalkan untuk SMS
const mail6 = new Mail("emailku@dicoding.com"); // misalkan untuk Email
