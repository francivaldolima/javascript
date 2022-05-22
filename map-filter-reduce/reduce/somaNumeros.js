const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

const total = myArray.reduce((acc, numero) => acc + numero);

console.log(total);

// function somaNumeros(arr) {
//   return arr.reduce(function (prev, current) {
//       console.log({prev});
//       console.log({current});
//     return prev + current;
//   });
// }

// const arr = [1, 2];
// console.log(somaNumeros(arr));
