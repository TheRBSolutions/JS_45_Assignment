function colorPoints(color) {
  let alienColor = color;

  if (alienColor == "yellow") {
    console.log("You have earned 5 points!");
  } else if (alienColor == "red") {
    console.log("You have earned 10 points!");
  } else {
    console.log("You have earned 15 points!");
  }
}

colorPoints("yellow");
colorPoints("red");
colorPoints("green");
