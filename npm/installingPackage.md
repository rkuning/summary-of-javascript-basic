Untuk menginstal package secara global, kita cukup menambahkan parameter -g pada perintah npm install. Di mana -g berarti global.

1. npm install -g <package-name> ex : npm install lodash

###

Sebenarnya terdapat dua tipe object dependencies dalam berkas package.json. Yang pertama object dependencies dan yang kedua object devDependencies. Apa perbedaannya?

Objek dependencies merupakan objek yang menampung package yang kita gunakan untuk membuat aplikasi. Sedangkan objek devDependencies digunakan untuk package yang berkaitan hanya saat proses pengembangan aplikasi, contohnya seperti package jest yang digunakan untuk testing. Package seperti jest ini hanya digunakan saat proses pengembangan aplikasi. Ia tidak digunakan lagi ketika aplikasi rilis atau digunakan langsung oleh pengguna.

Untuk memasang package sebagai devDependencies, kita bisa menambahkan parameter --save-dev pada perintah npm install.

npm install <package-name> --save-dev

Setelah package terpasang, maka akan ditambahkan ke berkas package.json.

"devDependencies": { "jest": "^26.6.3" }

Di dalam project akan muncul berkas package-lock.json. Berkas ini secara otomatis dibuat oleh Node untuk menjelaskan susunan project dan package (suatu package bisa saja menggunakan package lainnya). Berkas package-lock.json juga mendefinisikan versi package yang digunakan dengan lebih spesifik. Apa maksudnya?

Jika diperhatikan, pada file package.json kita menentukan versi dengan simbol caret (^). Selain caret, npm juga menggunakan simbol tilde (~). Keduanya digunakan untuk menentukan versi minor dan versi patch yang akan digunakan.

Jadi, jika kita melihat versi ~1.0.2 itu berarti npm dapat menginstal versi 1.0.2 atau versi patch terbaru seperti 1.0.4. Jika versi package dituliskan dengan caret seperti ^1.0.2, itu berarti npm dapat menginstall versi 1.0.2 atau versi minor terbaru seperti 1.1.0 [6].

File package-lock.json akan mendefinisikan secara spesifik mana versi yang akan digunakan.
