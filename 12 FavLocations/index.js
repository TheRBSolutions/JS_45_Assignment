const locations = [
  "Dubai",
  "Turkey",
  "Kashmir",
  "Makkah",
  "Madina",
  "Abu Dhabi",
];

console.log("Original sortings are");
console.log(locations);

console.log("\nAlphabetically Sorted:");
let sliced = locations.slice();
console.log(sliced.sort());

console.log("\nOriginal sorting:");
console.log(locations);

console.log("\nReversed alphabetical:");
console.log(sliced.reverse());

console.log("\nOriginal sorting order:");
console.log(locations);

