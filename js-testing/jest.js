/*
Menulis Kode Pengujian
Dari proyek sebelumnya, kita akan coba untuk memulai pengenalan format sederhana saat kita akan menuliskan sebuah test. Perhatikan kode di bawah ini.

test('deskripsi dari testcase kamu', () => {
      expect(perintah).matcher(nilai yang diekspektasikan);
});

*/

// contoh
test("dua tambah dua adalah empat", () => {
  expect(2 + 2).toBe(4);
});

/*
Dari contoh kode di atas expect(2 + 2) merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, perintah 
tersebut dapat berupa fungsi ataupun perintah langsung.

toBe(4) disebut dengan matcher, berisi nilai yang diharapkan dari sebuah perintah yang dilakukan sebelumnya. Dalam jest 
sendiri terdapat berbagai matchers yang dapat digunakan, misalkan:

toBe(x)	bahwa nilai ekspektasi yang diharapkan adalah x
toEqual(x)	bahwa nilai ekspektasi yang diharapkan sama dengan x
toBeNull()	bahwa nilai ekspektasi yang diharapkan adalah null
toBeTruthy()	bahwa nilai ekspektasi yang diharapkan adalah truth
toBeFalsy()	bahwa nilai ekspektasi yang diharapkan adalah false
*/
