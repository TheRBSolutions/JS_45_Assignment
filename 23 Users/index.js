const userNames = ["Tom", "Jerry", "Mr Bond", "Admin", "Mr DON"];

userNames.forEach((element) => {
  if (element === "Admin") {
    console.log("\nHello admin, would you like to see a status report?");
  } else {
    console.log("\nHello " + element + ", thank you for logging in again!");
  }
});
