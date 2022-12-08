// tipe dulu sekaligus deklarasi global scoope
var yourName;
yourName = "Danang";
var yourName2 = "Danang";

// deklarasi ecma-script (deklarasi baru)
// let & const
// let untuk deklarasi biasa yang bisa diassign ulang
// const -> tidak bisa di deklarasikan ulang tapi bisa diubah isinya
let firstName = "Danang";
let lastName;
lastName = "Basrin";
let middleName = "Ipul";
let myAge = 10;

let fullName = firstName + middleName + lastName; //DanangIpulBasrin
let fullName2 = (firstName = "Wahyu"); // Wahyu
let fullName3 = "Danang " + "Ipul " + "Basrin"; //Danang Ipul Basrin

console.log(lastName);
console.log(fullName);
console.log(fullName2);

const z = 10;
// z = 20; //error karena variabel tidak boleh di deklarasikan / assign ulang. tapi boleh isi data seperti object atau array diubah.
