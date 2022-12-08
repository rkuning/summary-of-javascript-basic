// for loop 1

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/* output
  0
  1
  2
  3
  4
  */

//   for loop 2

let datas = [1, 2, 3, 4];

for (let i in datas) {
  console.log(datas[i]);
}

/* output
  1
  2
  3
  4
  */

//   for loop 3

datas.forEach((data) => console.log(data));

/* output
  1
  2
  3
  4
  */

//   for loop 4

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for (const arrayItem of myArray) {
  console.log(arrayItem);
}

/* output
Luke
Han
Chewbacca
Leia
*/

// while & do while
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 100);
