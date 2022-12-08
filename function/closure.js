// Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
function init() {
  var name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();
console.log();
/* output
  Halo, Obi Wan
   */

function init2() {
  var name = "Obi Wan";

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}

let myFunction = init2();
myFunction();
console.log();
/* output
  Halo, Obi Wan
   */

let counter = 0;

let add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
counter = 23;
console.log(add());
console.log();
/* output
1
2
24
 */

let add2 = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

let addCounter = add2();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
  1
  2
  3
   */
