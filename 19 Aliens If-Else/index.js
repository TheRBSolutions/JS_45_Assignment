function ifBlock() {
  let alienColor = "yellow";
  console.log("\nExpected 5 Points");

  if (alienColor == "yellow") {
    console.log("The Player has earned 5 points!!!");
  } else {
    console.log("The Player has earned 10 Points!!!");
  }
}

function elseBlock() {
  let alienColor = "green";
  console.log("\nExpected 10 Points");

  if (alienColor == "yellow") {
    console.log("The Player has earned 5 points!!!");
  } else {
    console.log("The Player has earned 10 Points!!!");
  }
}

ifBlock();
elseBlock();
