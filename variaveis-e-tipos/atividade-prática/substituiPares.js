// -------------------------------Solução 1------------------------------------------

function arrayVerificador1(array){
  if(!array) return -1;
  if(!array.length) return -1;
  for(let i=0; i< array.length; i++){
    if(array[i] === 0){
      console.log("Você já é zero!!");
    }else if(array[i] % 2 === 0){
      console.log(`Substituindo ${array[i]} por 0 ...`);
      array[i] = 0;
    }
  }

  return array;
}

let array1 = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(arrayVerificador1([]));



// -------------------------------Solução 2------------------------------------------

// // function arrayVerificador2(array) {
// //   if (array.length === 0) {
// //     console.log("O array está vazio!");
// //     console.log(array);
// //   } else {
// //     for (let i = 0; i < array.length; i++) {
// //       if (array[i] % 2 === 0) {
// //         array[i] = 0;
// //       }
// //         array.slice(i, 1, 0);
// //     }
// //    console.log(array);
// //   }
// // }
// // let array1 = [1, 3, 4, 6, 80, 33, 23, 90];
// // let array2 = [];
// arrayVerificador2(array1);
