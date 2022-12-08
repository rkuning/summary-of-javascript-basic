// Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek.
// Sebagai contoh, misalkan terdapat blueprint untuk mendefinisikan objek Mail. Yang mana sms dan postman adalah object dari class Mail.

// deklarasi class bisa menggunakan 2 cara, yaitu function ataupun class.

// 1. FUNCTION
// a. Menggunakan pendekatan prototype
function Mail() {
  this.from = "pengirim@dicoding.com";
}

Mail.prototype.sendMessage = function (msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

// b. Tanpa pendekatan Prototype
function Mail2() {
  (this.from = "pengirim@dicoding.com"),
    (this.sendMessage = function (msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
    });
}

// pemanggilan
// const mail1 = new Mail2();
// mail1.sendMessage("hallo", "penerima@dicoding.com");
// console.log();
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// menggunakan prototype
const mail2 = new Mail();
mail2.hasOwnProperty("sendMessage");
// hasilnya = false

// tanpa prototype
const mail3 = new Mail2();
mail3.hasOwnProperty("sendMessage");
// hasilnya = true

// 2. CLASS
// Cara 2
class Mail3 {
  constructor() {
    this.from = "pengirim@dicoding.com";
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  }
}

const mail1 = new Mail3();
mail1.sendMessage("hallo", "penerima@dicoding.com");

/**
  output:
  you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
  **/
