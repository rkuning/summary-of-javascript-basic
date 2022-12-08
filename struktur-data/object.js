let object = { key1: "Danang", key2: "Ipul", key3: "Basrin" };

const user = { firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true };

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

// spaceship = { name: "New Millenium Falcon" }; // Error, const tidak boleh di deklarasikan ulang, tapi di ubah valuenya boleh jika isinya array atau object

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

// menambah properti
spaceship.class = "Light freighter";

console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

// menghapus properti
delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */
