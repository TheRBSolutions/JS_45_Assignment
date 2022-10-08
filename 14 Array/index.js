// Using the process.argv property by using arguments

// Insert array element using(From Folder 14)"node index.js X Y Z" up to a maximum of 6 elements"

console.log(process.argv);

let newArray = [];
let temp = Array(6);
let i = 0;

function createList() {
  for (let index = 2; index < 8; index++) {
    temp = process.argv;

    newArray[i] = temp[index];
    i++;

    // Double Check
    if (index == 7) {
      return newArray;
    }
    if (newArray.includes(undefined)) {
      newArray.pop();
      return newArray;
    }
  }
}

let newArray1 = createList();
console.log(newArray1);
