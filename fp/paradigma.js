/*
Paradigma Functional Programming
Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

Sebagai gambaran buat Anda yang belum tahu apa itu deklaratif dan imperatif lebih jauh, silakan simak contoh kode berikut.

*/
// dibawah ini gaya penulisan imperatif. yaitu kita perlu memikirkan bagaimana cara melakukan perulangan dll. intinya manual
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// berikut gaya deklaratif
const names2 = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark2 = names2.map((name) => `${name}!`);

console.log(newNamesWithExcMark2);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */

// Kita tidak perlu pusing untuk memikirkan cara manual untuk mencapai sebuah tujuan. Tidak ada proses looping manual; Tidak perlu tahu kapan harus berhenti dari looping; Kita cukup fokus pada “what to solve” alias apa yang ingin kita selesaikan atau capai.
