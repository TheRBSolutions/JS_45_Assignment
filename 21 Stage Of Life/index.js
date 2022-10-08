const Age = 35;

if (Age < 2) {
  console.log("Person is a baby");
} else if (Age >= 2 && Age < 4) {
  console.log("Person is a toddler");
} else if (Age >= 4 && Age < 13) {
  console.log("Person is a kid");
} else if (Age >= 13 && Age < 20) {
  console.log("Person is a teenager");
} else if (Age >= 20 && Age < 65) {
  console.log("Person is an adult");
} else {
  console.log("Person is an elder");
}
