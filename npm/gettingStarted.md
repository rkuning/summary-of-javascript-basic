Getting Started with NPM

#

Semakin kompleks suatu aplikasi, semakin banyak pula package yang digunakan. Di sinilah kita memerlukan sebuah package manager. Package manager merupakan tools yang dapat membantu pengelolaan package pada proyek agar lebih mudah. Kita dapat dengan mudah memasang dan menghapus package yang dibuat oleh orang lain pada proyek kita. Selain itu, kita juga dapat menulis module/package untuk dikonsumsi secara publik.

#

Hampir setiap bahasa pemrograman populer memiliki package manager-nya masing-masing. Java memiliki Maven dan Gradle, PHP memiliki Composer, dan Python memiliki pip. Lalu bagaimana dengan JavaScript? Tentu JavaScript juga punya! NPM adalah salah satu package manager yang banyak digunakan oleh JavaScript developer dalam mengelola package, selain NPM ada juga Yarn Package Manager.

#

Keduanya, baik yarn atau npm, merupakan package manager yang dapat membantu kita dalam mengembangkan aplikasi web atau node. Namun, pada materi ini kita hanya akan membahas salah satu package managernya saja, yaitu NPM. Hal tersebut karena NPM merupakan package manager standar yang disediakan Node.js.

#

Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/. NPM ini merupakan standard package manager yang disediakan oleh Node.js dan otomatis terpasang ketika memasang Node.js pada komputer kita.

#

Berbicara mengenai package, sebelumnya kita sudah membuat dan mengetahui fungsi module pada JavaScript. Dengan module kita dapat berbagi kode JavaScript untuk digunakan pada berkas yang berbeda. Bahkan, melalui NPM kita dapat menggunakannya pada proyek yang berbeda. Dalam arti lain, package yang tersedia pada NPM adalah sebuah module.

#

Dalam menggunakan NPM kita dapat menulis perintah pada terminal (Linux/macOS) atau command prompt/PowerShell (Windows). Ada banyak command yang tersedia pada NPM. Untuk melihat daftarnya, kita dapat menjalankan perintah npm help pada terminal/command prompt.

      npm install
      npm i
      npm in
      npm ins
      npm isntal
      npm add

// semua perintah di atas memiliki fungsi yang sama

#

      init => Membuat berkas package.json pada project === [--force|-f|--yes|-y|--scope]
      install <package-name> => Memasang dan mendaftarkan package pada berkas package.json === [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
      run-script <command> => Menjalankan perintah yang terdapat pada objek scripts di berkas package.json === [--silent] [-- <args>...]
      uninstall <package-name> => Menghapus dan mengeluarkan package dari berkas package.json === [-S|--save|-D|--save-dev|-O|--save-optional|--no-save]
      version => Untuk melihat versi package yang tersedia secara global atau lokal === [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
