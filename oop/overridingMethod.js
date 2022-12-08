/*
Overriding Method
Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method 
ataupun constructor yang dimiliki oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class.

Overriding Constructor
Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di inheritance atau pewarisan, 
kita menemukan kasus seperti di bawah ini.

Overriding Method
Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang ada pada parent class. 
Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is).
*/

class Mail {
  constructor(author, isPublish) {
    this._contacts = [];
    this.from = author;
    this.isPublish = isPublish;
  }

  sendMessage(msg, to) {
    console.log("you send:", msg, "to", to, "from", this.from);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, author, isPublish) {
    super(author, isPublish); // ini merujuk ke constructor parrent, jika di isi 1, maka hanya author aja yang ke isi.
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
    //     this.phoneNumber = phoneNumber;
  }

  sendMessage(msg, to) {
    super.sendMessage(msg, to); // memanggil sendMessage yang ada di parrent
    console.log("Send by WA");
  }
}

//pemanggilan
const wa1 = new WhatsApp("dicoding", true, "089989090898", true);
// console.log(wa1.from); // undefined
console.log(wa1.isPublish); // undefined
console.log(wa1.isPublish); // undefined
wa1.sendMessage("halo", "089000999888");

/**
Output:
Send by WA
**/
