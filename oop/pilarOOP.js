/*
4 Pilar OOP
Encapsulation
Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. Artinya objek lain 
tidak bisa mengakses atau mengubah nilai dari property secara langsung. Pada contoh kasus Mail kita tidak bisa langsung 
mengubah daftar contact, namun kita bisa menambahkannya melalui fungsi saat kirim pesan atau mengambil data tersebut 
melalui method showAllContacts.

Abstraction
Abstraksi bisa dibilang merupakan penerapan alami dari enkapsulasi. Abstraksi berarti sebuah objek hanya menunjukkan 
operasinya secara high-level. Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima, namun kita tidak perlu 
tahu seperti apa proses enkripsi dan dekripsi isi pesan, atau bagaimana sebuah daftar contact dapat bertambah.

Inheritance
Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama. 
Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki 
juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. Maka 
dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. 
Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, whatsapp bisa membuat grup, 
mengirim broadcast message sedangkan Email tidak.



*/

// A. ENCAPSULATION
class Mail {
  constructor(author) {
    this._contacts = [];
    this.from = author;
  }

  sendMessage = function (msg, to) {
    console.log("you send:", msg, "to", to, "from", this.from);
    this._contacts.push(to);
  };

  showAllContacts() {
    return this._contacts;
  }
}

const mail = new Mail("danangipulbasriN@gmail.com");
mail.sendMessage("Hallo salam kenal ya", "rizky@gmail.com");
mail.sendMessage("Hallo salam kenal ya", "wahyu@gmail.com");
console.log(mail.showAllContacts());
console.log();

// C. INHERITANCE / pewarisan
// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
// class ChildClassName extends ParentClassName {}

// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
// ChildClassName.prototype = new ParentClassName();

// contoh inheritance
class WhatsApp extends Mail {
  constructor(author) {
    super(author);
    this.username = "dicoding";
    this.isBusinessAccount = true;
  }
  myProfile() {
    return `my name ${this.username}, is ${this.isBusinessAccount ? "Business" : "Personal"}`;
  }
}

const wa1 = new WhatsApp("080111000222");
console.log(wa1.myProfile());
wa1.sendMessage("halo", "089000999888");
console.log(wa1.showAllContacts());

/* Output: 
    my name dicoding, is Business
    */
