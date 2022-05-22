const num = [32, 33, 16, 40,5,9,20, 34];

const re = num.filter(a => a % 2 === 0);

console.log(`Os números pares: [${re}]`);


// function filterPares(arr){
//     return arr.filter(callback)
// }

// function callback(item){
//     return item % 2 === 0;
// }

// const myArray = [1, 23, 55, 67, 30, 2, 4];
// console.log(filterPares(myArray));