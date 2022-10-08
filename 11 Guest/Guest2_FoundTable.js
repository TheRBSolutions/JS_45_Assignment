export default function FoundTable() {
  let list = ["Dr Zakir", "Imran Khan", "Muhammad Ali", "Isaac Newton"];

  console.log("\n" + list[3] + " Will not be coming \n");

  //console.log(list);

  list.splice(3, 1);
  //console.log(list);

  list.splice(3, 0, "Tom");
  //console.log(list);

  console.log(
    list[0] +
      " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
  );

  console.log(
    list[1] +
      " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
  );

  console.log(
    list[2] +
      " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
  );

  console.log(
    list[3] +
      " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
  );

  console.log("I have found a bigger table");

  list.splice(0, 0, "Mr First");
  list.splice(2, 0, "Mr DON");

  //console.log(list);

  list.push("Mr Killer");

  console.log(list);

  list.forEach((element) => {
    let i = 1;
    console.log(
      "\n" +
        element +
        " Kindly, come to my dinner invitation i am looking forward to meeting you."
    );
  });

  // console.trace("Called From");

  return list;
}

FoundTable();
