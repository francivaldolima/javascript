function arraySet(myArray) {
  const mySet = new Set(myArray);

  return [...mySet];
}

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(arraySet(myArray));
