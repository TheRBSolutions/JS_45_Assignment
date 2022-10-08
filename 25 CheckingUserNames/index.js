const currentUsers = ["Tom", "Jerry", "Mr Bond", "Admin", "Mr DON"];
const newUsers = ["Mr Jacky", "Mr Chan", "Mr Bond", "Mr Chouttah", "Mr Smart"];

let CaseInsen = [];
currentUsers.forEach((element) => {
  CaseInsen.push(element.toLowerCase());
});

console.log(CaseInsen);

newUsers.forEach((singleUser) => {
  if (CaseInsen.includes(singleUser.toLowerCase())) {
    console.log(
      "\n" + singleUser + " Name is already in use, choose another name!!!\n"
    );
  } else {
    console.log(singleUser + " Name is available to be taken!");
  }
});
