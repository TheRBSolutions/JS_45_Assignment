const userNames = [];

if (userNames.length !== 0) {
  userNames.forEach((element) => {
    if (element === "Admin") {
      console.log("\nHello admin, would you like to see a status report?");
    } else {
      console.log("\nHello " + element + ", thank you for logging in again!");
    }
  });
} else {
  console.log("We need to find some users");
}
