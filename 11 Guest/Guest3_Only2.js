"use strict";
import PrevCall from "./Guest2_FoundTable.js";

function changingList(list) {
  for (let index = list.length; index > 1; index--) {
    // console.log("This is item " + index);
    // console.log("Length of array is " + list.length);

    // console.log(list);

    let popped = list.pop();
    console.log(`Sorry ${popped} you cannot be invited\n`);

    if (list.length == 2) {
      // console.log("In side if Block");

      return list;
    }
  }
}

let list = PrevCall();
console.log("\nSorry but, We can only invite two people\n");

let listOfTwo = changingList(list);
listOfTwo.forEach((element) => {
  console.log(`${element}, You are still invited!!!`);
});

listOfTwo.pop();
listOfTwo.pop();
console.log(listOfTwo);

