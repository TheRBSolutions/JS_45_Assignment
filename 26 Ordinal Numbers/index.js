const ordinalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNums.forEach((element) => {
  if (element === 1) {
    console.log("1st");
  } else if (element === 2) {
    console.log("2nd");
  } else if (element === 3) {
    console.log("3rd");
  } else {
    console.log(element.toString() + "th");
  }
});
